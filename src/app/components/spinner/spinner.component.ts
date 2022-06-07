import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnInit {
  show = true;
  constructor() {
    setTimeout(()=>{
      this.show= false
    },5000)
  }

  ngOnInit() {}

}
