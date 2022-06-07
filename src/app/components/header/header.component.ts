import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header2',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  showToolbar: any
  @Input() title: string;
  @Input() go: string;

  constructor() { }

  ngOnInit() { }

}
