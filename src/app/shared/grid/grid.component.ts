import { AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements AfterViewInit {
  @ViewChild("expandWrapper", { read: ElementRef, static: true }) expandWrapper: ElementRef;

  constructor(public renderer: Renderer2) { }



  ngAfterViewInit(): void {
  }


}
