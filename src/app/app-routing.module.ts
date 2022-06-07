import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomePageModule)
  },
  {
    path: 'pages',
    children: [
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('./pages/account/account.module').then(m => m.AccountPageModule)
      },
      {
        path: 'inbox',
        loadChildren: () => import('./pages/inbox/inbox.module').then(m => m.InboxPageModule)
      },
      {
        path: 'inbox/inbox-details/:id_inbox',
        loadChildren: () => import('./pages/inbox-detail/inbox-detail.module').then(m => m.InboxDetailPageModule)
      },
      {
        path: 'store-detail/:id_store',
        loadChildren: () => import('./pages/store-detail/store-detail.module').then(m => m.StoreDetailPageModule)
      },
      {
        path: 'products/:id_store',
        loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsPageModule)
      },
      {
        path: 'products/product-details/:id_product',
        loadChildren: () => import('./pages/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
      },
      {
        path: 'coupons',
        loadChildren: () => import('./pages/coupons/coupons.module').then(m => m.CouponsPageModule)
      },
      {
        path: 'coupons/coupon-details/:id_coupon',
        loadChildren: () => import('./pages/coupon-details/coupon-details.module').then(m => m.CouponDetailsPageModule)
      },
      {
        path: 'rewards',
        loadChildren: () => import('./pages/rewards/rewards.module').then(m => m.RewardsPageModule)
      },
      {
        path: 'rewards/reward-details/:id_reward',
        loadChildren: () => import('./pages/reward-details/reward-details.module').then(m => m.RewardDetailsPageModule)
      },
      {
        path: 'gps-store/:id_store',
        loadChildren: () => import('./pages/gps-store/gps-store.module').then(m => m.GpsStorePageModule)
      },
      {
        path: 'comments/:id_store',
        loadChildren: () => import('./pages/comments/comments.module').then(m => m.CommentsPageModule)
      },
      {
        path: 'shopping',
        loadChildren: () => import('./pages/shopping/shopping.module').then(m => m.ShoppingPageModule)
      },
      {
        path: 'referrals',
        loadChildren: () => import('./pages/referrals/referrals.module').then(m => m.ReferralsPageModule)
      },
      {
        path: 'transfers',
        loadChildren: () => import('./pages/transfers/transfers.module').then(m => m.TransfersPageModule)
      }

    ]
  }]


@NgModule({
    imports: [
      RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [RouterModule]
  })
export class AppRoutingModule { }
