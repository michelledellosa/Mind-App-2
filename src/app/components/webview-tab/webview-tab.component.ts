import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-webview-tab',
  templateUrl: './webview-tab.component.html',
  styleUrls: ['./webview-tab.component.scss'],
})
export class WebviewTabComponent implements OnInit {

  @Input() param: string;

  constructor(
    private router: Router,
  ) {}

  ngOnInit() {
    //console.log('item = '+this.param)
  }


  getBack() {
    console.log('this.param = ', this.param)
    if(this.param=='home'){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/pages/store-detail/' + this.param])
    }

    
  }
}

