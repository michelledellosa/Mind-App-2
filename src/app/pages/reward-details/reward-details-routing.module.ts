import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RewardDetailsPage } from './reward-details.page';

const routes: Routes = [
  {
    path: '',
    component: RewardDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RewardDetailsPageRoutingModule {}
