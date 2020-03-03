import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConfirmedPage } from '../confirmed/confirmed.page';
@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.page.html',
  styleUrls: ['./item-info.page.scss'],
})
export class ItemInfoPage implements OnInit {
  viewType: string;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  setViewType(vt) {
    this.viewType = vt;
  }

  item_detail() { }

  confirmed() {
    this.modalController.create({ component: ConfirmedPage }).then((modalElement) => {
      modalElement.present();
    }
    )
  }
}
