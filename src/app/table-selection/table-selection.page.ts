import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-table-selection',
  templateUrl: './table-selection.page.html',
  styleUrls: ['./table-selection.page.scss'],
})
export class TableSelectionPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }
	
	home() {
    this.navCtrl.navigateRoot(['./home']);
  } 

}
