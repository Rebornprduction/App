import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ConfirmedPage } from '../confirmed/confirmed.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tab: string = "popular";
  viewType: string;
  constructor(private route: Router, private modalController: ModalController) { }

  setViewType(vt) {
    this.viewType = vt;
  }
  item_detail() {
    this.route.navigate(['./item-info']);
  }

  confirmed() {
    this.modalController.create({ component: ConfirmedPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }
}
