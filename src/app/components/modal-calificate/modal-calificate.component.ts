import { Component, Input, OnInit } from '@angular/core';

import { AlertController, NavController, LoadingController,ModalController } from '@ionic/angular';
import { AgmService } from 'src/app/services/agm.service';
import { CommentsServiceService } from 'src/app/services/comment.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HomePage } from 'src/app/pages/home/home.page';

@Component({
  selector: 'app-modal-calificate',
  templateUrl: './modal-calificate.component.html',
  styleUrls: ['./modal-calificate.component.scss'],
})
export class ModalCalificateComponent implements OnInit {
  calification:number

  constructor(
    private modalCtrl: ModalController,
    public agmService: AgmService,  
    private commentsService: CommentsServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {}

  calificated(){
    console.log('Dentro de calificated')
    this.agmService.modalCalification.subscribe(res=>{
      console.log('res dentro de modal = '+JSON.stringify(res));
      this.commentsService.addComment(res.comment, res.id,this.calification+1);
     this.closeModal();
     setTimeout(()=>{                           // <<<---using ()=> syntax
      this.router.navigate(['/pages/store-detail/' + res.id]);
  }, 1000);
      //this.router.navigate(['/pages/store-detail/' + res.id]);
      
      
      
    });
  }

  closeModal(){
    this.modalCtrl.dismiss();
    
  }
 

}
