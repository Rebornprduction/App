import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TranslateModule } from '@ngx-translate/core'; 

import { ItemInfoPageRoutingModule } from './item-info-routing.module';

import { ItemInfoPage } from './item-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,  
    ItemInfoPageRoutingModule
  ],
  declarations: [ItemInfoPage]
})
export class ItemInfoPageModule {}
