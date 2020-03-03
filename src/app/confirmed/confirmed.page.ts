import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.page.html',
  styleUrls: ['./confirmed.page.scss'],
})
export class ConfirmedPage implements OnInit {
  viewType: string;
  constructor(private modalController: ModalController, private navCtrl: NavController) { }

  ngOnInit() {
  }
  setViewType(vt) {
    this.viewType = vt;
  }
  dismiss() {
    this.modalController.dismiss();
  }
  home() {
    this.navCtrl.navigateRoot(['./home']);
    this.modalController.dismiss();
  }
}
