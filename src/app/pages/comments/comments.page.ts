import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit, OnDestroy {

  recipeId: string;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      this.recipeId = data.get('id_store');
      console.log('this.recipeId form comments page = '+this.recipeId)
    });
  }

  ngOnDestroy(): void {}



}
