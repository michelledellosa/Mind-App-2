import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { ProductsService } from 'src/app/services/products.service';
import { LoadingService } from 'src/app/services/common/loading.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.page.html',
  styleUrls: ['./product-details.page.scss'],
})
export class ProductDetailsPage implements OnInit {
  url

  constructor(
    public commonService: CommonService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public loadingService: LoadingService

  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      let recipeId = data.get('id_product');
    
      this.url = environment.account+recipeId;
      console.log('URL = '+this.url)

    })
  }
}
