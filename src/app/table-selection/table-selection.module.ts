import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 

import { IonicModule } from '@ionic/angular';

import { TableSelectionPageRoutingModule } from './table-selection-routing.module';

import { TableSelectionPage } from './table-selection.page';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	 TranslateModule,  
    TableSelectionPageRoutingModule
  ],
  declarations: [TableSelectionPage]
})
export class TableSelectionPageModule {}
