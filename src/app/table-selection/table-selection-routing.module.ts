import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableSelectionPage } from './table-selection.page';

const routes: Routes = [
  {
    path: '',
    component: TableSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableSelectionPageRoutingModule {}
