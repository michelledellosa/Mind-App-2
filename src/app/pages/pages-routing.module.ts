import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'store-detail/:id_store',
    loadChildren: () => import('./store-detail/store-detail.module').then(m => m.StoreDetailPageModule)
  },
  {
    path: 'coupons',
    loadChildren: () => import('./coupons/coupons.module').then( m => m.CouponsPageModule)
  },
  {
    path: 'rewards',
    loadChildren: () => import('./rewards/rewards.module').then( m => m.RewardsPageModule)

  },
  {
    path: 'coupon-details',
    loadChildren: () => import('./coupon-details/coupon-details.module').then( m => m.CouponDetailsPageModule)
  },
  {
    path: 'reward-details',
    loadChildren: () => import('./reward-details/reward-details.module').then( m => m.RewardDetailsPageModule)
  },
  {
    path: 'inbox-detail',
    loadChildren: () => import('./inbox-detail/inbox-detail.module').then( m => m.InboxDetailPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'product-details',
    loadChildren: () => import('./product-details/product-details.module').then( m => m.ProductDetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'gps-store',
    loadChildren: () => import('./gps-store/gps-store.module').then( m => m.GpsStorePageModule)
  },
  {
    path: 'comments',
    loadChildren: () => import('./comments/comments.module').then( m => m.CommentsPageModule)
  },
  {
    path: 'shopping',
    loadChildren: () => import('./shopping/shopping.module').then( m => m.ShoppingPageModule)
  },
  {
    path: 'referrals',
    loadChildren: () => import('./referrals/referrals.module').then( m => m.ReferralsPageModule)
  },  {
    path: 'transfers',
    loadChildren: () => import('./transfers/transfers.module').then( m => m.TransfersPageModule)
  }



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
