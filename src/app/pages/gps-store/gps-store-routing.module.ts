import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GpsStorePage } from './gps-store.page';

const routes: Routes = [
  {
    path: '',
    component: GpsStorePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GpsStorePageRoutingModule {}
