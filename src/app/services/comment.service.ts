import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { LoginService } from 'src/app/services/login.service';
import { AgmService } from './agm.service';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class CommentsServiceService {
  id_store: number

  commentCollection: AngularFirestoreCollection<any>;
  commentDoc: AngularFirestoreDocument<any>;

  comments: Observable<any[]>;
  comment: Observable<any>;

  dataComment = {
    id_login: 0,
    id_store: 0,
    email: '',
    comment: '',
    date: '',
    calification: 0
  }

  constructor(
    private db: AngularFirestore,
    private loginService: LoginService,
    private agmService: AgmService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    this.commentCollection = db.collection('comments', ref => ref.orderBy('date', 'desc'));
  }

  ngOnInit() {
  }


  getComments() {
    console.log('dentro de getcomments')
    this.comments = this.commentCollection.snapshotChanges().pipe(
      map(res => {
        return res.map(data => {
          let comments = data.payload.doc.data() as any;
          comments.id = data.payload.doc.id;
          return comments;
        })
      })
    );
    return this.comments
  }

  addComment(comment: string, id: number, calification: number) {
    console.log('comment de services= '+comment,' id = '+id+' calificacion ='+calification);
    if (this.loginService.isLogged() == true) {
      this.loginService.getUserStored();
      this.agmService.user.subscribe(res => {
        this.dataComment.id_login = res.id_login;
        this.dataComment.email = res.email;
        this.dataComment.comment = comment;
        this.dataComment.date = new Date().toISOString();
        this.dataComment.id_store = id;
        this.dataComment.calification = calification
        this.commentCollection.add(this.dataComment);
      })

    } else {
      alert('Po favor inicie sesion primero.')
    }


  }
}
