import { Component, Input } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AllergyDetailPage } from './../../pages/allergy-detail/allergy-detail';
import { ImmunizationDetailPage } from '../../pages/immunization-detail/immunization-detail';
import { SocialHistoryDetailPage } from '../../pages/social-history-detail/social-history-detail';
import { DiagnosticProcedureDetailPage } from '../../pages/diagnostic-procedure-detail/diagnostic-procedure-detail';
import { DiagnosticProcedureClassificationProvider } from '../../providers/diagnostic-procedure-classification/diagnostic-procedure-classification';

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
    private modalCtrl: ModalController,
    private dpcp: DiagnosticProcedureClassificationProvider
  ) {
    console.log('Hello TileComponent Component');
  }

  getSub(id: number) {
    this.tiles = this.dpcp.getMenu(id);
  }

  goToRecord(tile: any) {
    if (tile.menu == "diagnostic-procedure") {
      this.navCtrl.push(DiagnosticProcedureDetailPage,
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