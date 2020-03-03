import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core'; 
	
import { IonicModule } from '@ionic/angular';

import { ConfirmedPageRoutingModule } from './confirmed-routing.module';

import { ConfirmedPage } from './confirmed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	TranslateModule,   
    ConfirmedPageRoutingModule
  ],
  declarations: [ConfirmedPage]
})
export class ConfirmedPageModule {}
