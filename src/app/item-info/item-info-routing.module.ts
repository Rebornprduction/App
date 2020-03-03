import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemInfoPage } from './item-info.page';

const routes: Routes = [
  {
    path: '',
    component: ItemInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemInfoPageRoutingModule {}
