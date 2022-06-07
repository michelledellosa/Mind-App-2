import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/services/common/common.service';
import { ProductsService } from 'src/app/services/products.service';
import { LoadingService } from 'src/app/services/common/loading.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  url
  title: string;
  product: any = [];
  products: any = [];
  showToolbar = false;
  recipeId :string;
  constructor(
    public commonService: CommonService,
    private productsServices: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public loadingService: LoadingService
  ) { }

  async ngOnInit() {
    this.activatedRoute.paramMap.subscribe(data => {
      this.recipeId = data.get('id_store');
      // console.log('recipeId = '+recipeId)
      this.url = environment.productDetails + this.recipeId
      console.log(this.url);

    })
    setTimeout(async () => {
      // await this.loadingService.presentLoading()
    }, 300);
  }

  closeModal() {
    console.log("closeModal")
    this.commonService.goToRouter("/home")
  }

  dismissLoading() {
    //console.log("dismissLoading")
    // this.loadingService.dismissLoading()
  }

}
