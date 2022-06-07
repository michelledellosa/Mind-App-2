import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { AlertController, NavController, LoadingController, ModalController } from '@ionic/angular';


import { AgmService } from 'src/app/services/agm.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { CommentsServiceService } from 'src/app/services/comment.service';
import { File, FileEntry } from '@awesome-cordova-plugins/file/ngx';

import { Camera, CameraOptions } from '@awesome-cordova-plugins/camera/ngx';
import { ModalCalificateComponent } from 'src/app/components/modal-calificate/modal-calificate.component';

@Component({
  selector: 'app-comments-videos',
  templateUrl: './comments-videos.component.html',
  styleUrls: ['./comments-videos.component.scss'],
})
export class CommentsVideosComponent implements OnInit {

  @Input() recipeId: string;
  store: any = [];
  detail: any = [];

  calification: number = 1;

  //todos los comentarios sin filtrar
  allComments: any[];
  //comentarios por tiendas
  storeComments
  newComment: string;
  commentShow = 1;

  user;

  constructor(
    public agmService: AgmService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoriesServices: CategoriesService,
    private commentsService: CommentsServiceService,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    public plt: Platform

  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('userLogin'));

    this.categoriesServices.getCategories()
      .subscribe(data => {
        this.store = data.result;
        this.detail = this.store.find(res => { return res.Id == this.recipeId });

        this.commentsService.getComments().subscribe(res => {
          this.allComments = res;
          this.storeComments = this.allComments.filter(res => {
            return res.id_store === Number(this.recipeId)

          });

        })
      });
    // });
  }

  ionViewWillEnter() {
    //console.log('this.newComment =' + this.newComment)
    if (this.newComment != undefined) {
      //location.reload()
      this.newComment = ''
    }
  }

  ngOnDestroy(): void {
    /*console.log('on');
    this.newComment;*/
  }

  onSubmitData(id: number) {
    let someDetails = {
      comment: this.newComment,
      id: id
    }
    //console.log('this new ommen = ' + this.newComment)
    //envio de comentario y id de la tienda a agm para obtener en el modal al modal
    this.agmService.modalCalification.next(someDetails);

    this.openModal();
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ModalCalificateComponent,
      cssClass: 'my-custom-class'

    });
    return modal.present()
  }

}
