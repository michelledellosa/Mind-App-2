import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController, ModalController, Platform } from '@ionic/angular';
import { AgmService } from 'src/app/services/agm.service';
import { MediaCapture } from '@awesome-cordova-plugins/media-capture/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AlertService } from 'src/app/services/common/alert.service';
import { LoadingService } from 'src/app/services/common/loading.service';
import { Observable } from 'rxjs';
import { StreamingMedia } from '@awesome-cordova-plugins/streaming-media/ngx';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { LoginService } from 'src/app/services/login.service';



@Component({
  selector: 'app-store-videos',
  templateUrl: './store-videos.component.html',
  styleUrls: ['./store-videos.component.scss'],
})


export class StoreVideosComponent implements OnInit {

  @Input() recipeId: string;
  @Input() id_user: number;
  @Input() email_user: string;
  private itemsCollection: AngularFirestoreCollection<any>;
  items: Observable<any[]>;

  constructor(
    public modalController: ModalController,
    private androidPermissions: AndroidPermissions,
    private streamingMedia: StreamingMedia,
    public loadingService: LoadingService,
    public alertService: AlertService,
    private afs: AngularFirestore,
    private _storage: AngularFireStorage,
    public agmService: AgmService,
    private mediaCapture: MediaCapture,
    public actionSheetController: ActionSheetController,
    private loginService: LoginService,
    public plt: Platform,
    private file: File
  ) { }

  async ngOnInit() {
    //console.log("recipeId", this.recipeId)
    this.itemsCollection = this.afs
      .collection<any>('comments-videos', ref => ref
        .where('id_store', '==', this.recipeId)
        .orderBy('created_at', 'desc'));
    this.items = this.itemsCollection.valueChanges({ idField: '_id' });
  }



  async recordWithCamare() {
    if (this.loginService.isLogged() == true) {

      // solicitar permisos de camara

      await this.getDownloadPath()

      await this.loadingService.presentLoading();
      this.mediaCapture
        .captureVideo({
          limit: 1,
          duration: 10,
          quality: 0,
        }).then(async res => {
          console.log("captureVideo", res)
          var filePath = res[0].fullPath;
          var name = res[0].name;

          // convert video to base64
          let base64 = await this.convertVideoToBase64(filePath);

          //  upload to firebase
          let videoUrl = await this.uploadVideo(base64, '"video/mp4"', name);
          console.log("videoUrl", videoUrl)

          // save to firebase
          await this.addVideo(name, videoUrl);

          this.loadingService.dismissLoading();
          this.alertService.presentAlert('Video added successfully');
        }).catch(err => {
          this.alertService.presentAlert('Error al subir video');
          this.loadingService.dismissLoading();
        })
    } else {
      alert('Po favor inicie sesion primero.')
    }
  }

  /*
 * Reads the fileURI, uses FileReader() to encode it to base64, and then we have to fix it.
 */
  private async convertVideoToBase64(fullPath) {
    console.log('insided convertVideoToBase64');
    return new Promise(async (resolve, reject) => {
      let myPath = fullPath;
      // Make sure we copy from the right location
      if (fullPath.indexOf("file://") < 0) {
        myPath = "file://" + fullPath;
      }


      const name = myPath.substr(myPath.lastIndexOf("/") + 1);
      const copyFrom = myPath.substr(0, myPath.lastIndexOf("/") + 1);

      // Si hay problemas con el resultado (readAsDataURL) 
      // verificar los permisos de la aplicación y agregar esta linea en en manifest.xml android
      // https://github.com/apache/cordova-plugin-file/issues/348#issuecomment-737774972
      await this.file
        .readAsDataURL(copyFrom, name)
        .then(async (dataText) => {
          console.log('Dentro del then');
          resolve(dataText);
        })
        .catch((err) => {
          console.log("readAsDataURL", err);
          reject(err);
        });
    });

  }



  public async getDownloadPath() {
    if (this.plt.is('ios')) {
      return this.file.cacheDirectory;
    }


    await this.androidPermissions
      .checkPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE)
      .then(result => {
        console.log("READ_EXTERNAL_STORAGE", result.hasPermission)
        if (!result.hasPermission) {
          return this.androidPermissions
            .requestPermission(this.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE);
        }
      });


    // To be able to save files on Android, we first need to ask the user for permission. 
    // We do not let the download proceed until they grant access
    await this.androidPermissions
      .checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
      .then(result => {
        console.log("WRITE_EXTERNAL_STORAGE", result.hasPermission)
        if (!result.hasPermission) {
          return this.androidPermissions
            .requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
        }
      });

    return this.file.documentsDirectory;
  }


  /**
   *  add video to firebase
   * @param name 
   * @param url 
   */
  addVideo(name: string, videoUrl: string) {
    console.log('insided add video');
    console.log('this.id_user = ',this.id_user);
    console.log('this.email_user= ',this.email_user);
    console.log('this.recipeId= ',this.recipeId);

    return new Promise(async (resolve, reject) => {
      // Persist a document id
      const id = this.afs.createId();

      this.itemsCollection.doc(id)
        .set({
          id,
          platform: this.plt.is('ios') ? 'ios' : 'android',
          like: 0,
          id_user: this.id_user, // agregar id del usuario
          username: this.email_user, // agregar email de usuario
          id_store: this.recipeId, // id del store
          name, // nombre del video
          type: "video",
          videoUrl, // url del video en firebase
          created_at: Date.now(),
        })
        .catch(err => reject(err));

      resolve('ok');

    })
  }

  watchVideo(item) {
    let { videoUrl } = item;
    if (!videoUrl) { return }
    console.log("item", videoUrl)
    this.streamingMedia.playVideo(videoUrl);
  }



  /**
   * subimos el video a firebase storage
   */
  public uploadProgress = 0;
  async uploadVideo(captureVideoUrl, contentType, newName) {
    console.log('inside uploadVideo')
    return new Promise<any>(async (resolve, reject) => {
      try {
        const filePath = `multimedia/${this.recipeId}/${Date.now()}-${newName}`;
        console.log("filePath", filePath);

        const fileRef = this._storage.ref(filePath);
        const task = fileRef.putString(captureVideoUrl, "data_url", {
          contentType,
        });

        task.percentageChanges().subscribe((res) => {
          this.uploadProgress = this.setPercentBar(res);
        });

        task
          .snapshotChanges()
          .pipe(
            finalize(() => {
              fileRef.getDownloadURL().subscribe((url) => {
                this.uploadProgress = 0;
                resolve(url);
              });
            })
          )
          .subscribe();
      } catch (err) {
        console.log("uploadVideo err =", err)
        reject(err);
      }
    });

  }

  /**
   * porcentaje de la barra de progreso
   */
  setPercentBar(i) {
    let apc = i / 100;
    console.warn("setPercentBar", apc);
    return apc;
  }


}
