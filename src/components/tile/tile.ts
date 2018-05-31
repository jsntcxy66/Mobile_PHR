import { Component, Input } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { MedicalClassificationProvider } from '../../providers/medical-classification/medical-classification';
import { MedicalRecordDetailPage } from '../../pages/medical-record-detail/medical-record-detail';
import { AllergyDetailPage } from './../../pages/allergy-detail/allergy-detail';
import { ImmunizationDetailPage } from '../../pages/immunization-detail/immunization-detail';
import { SocialHistoryDetailPage } from '../../pages/social-history-detail/social-history-detail';

/**
 * Generated class for the TileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tile',
  templateUrl: 'tile.html',
  // providers: [MedicalClassificationProvider]
})
export class TileComponent {
  @Input() tiles: Array<any>;

  color = ['darksalmon', 'rosybrown', 'slategrey'];

  constructor(
    public navCtrl: NavController,
    public mcp: MedicalClassificationProvider,
    private modalCtrl: ModalController
  ) {
    console.log('Hello TileComponent Component');
  }

  getSub(id: number) {
    this.tiles = this.mcp.getMenu(id);
  }

  goToRecord(tile: any) {
    if (tile.menu == "lab_test") {
      this.navCtrl.push(MedicalRecordDetailPage,
        {
          'id': tile.id,
          'title': tile.name
        });
    }
    else if (tile.menu == "allergy") {
      let modal = this.modalCtrl.create(AllergyDetailPage,
        {
          'id': tile.id,
          'title': tile.name
        });
      modal.present();
    }
    else if (tile.menu == "immunization") {
      let modal = this.modalCtrl.create(ImmunizationDetailPage,
        {
          'id': tile.id,
          'title': tile.name
        });
      modal.present();
    }
    else if (tile.menu == "socialhistory") {
      let modal = this.modalCtrl.create(SocialHistoryDetailPage,
        {
          'id': tile.id,
          'title': tile.name
        });
      modal.present();
    }
  }
}