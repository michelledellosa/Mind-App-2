import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-inbox-detail',
  templateUrl: './inbox-detail.page.html',
  styleUrls: ['./inbox-detail.page.scss'],
})
export class InboxDetailPage implements OnInit {
  title: string;
  showToolbar: any
  inbox: any = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private notiService: NotificationsService
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      let recipeId = data.get('id_inbox');
      let temp: any = [];

      this.notiService.getNotifications()
        .subscribe(res => {
          temp = res;

          this.inbox = temp.find(res => {
            return res.id == recipeId
          });
          console.log('this.inbox' + JSON.stringify(this.inbox))
          this.title = this.inbox.title

        })
    })
  }

  deleteInbox(id: string) {
    if (confirm('¿Desea eliminar este mensaje?')) {
      this.notiService.deleteNotification(id);
      this.router.navigate(['pages/inbox']);
    }

  }

}
