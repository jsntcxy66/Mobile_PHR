import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';
import { MedicalClassificationProvider } from '../../providers/medical-classification/medical-classification';
import { MedicalRecordDetailPage } from '../../pages/medical-record-detail/medical-record-detail';
/**
 * Generated class for the TileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'tile',
  templateUrl: 'tile.html',
  providers: [MedicalClassificationProvider]
})
export class TileComponent {
  @Input() tiles: Array<any>;
  text: string;

  constructor(
    public navCtrl: NavController,
    public mcp: MedicalClassificationProvider,
  ) {
    console.log('Hello TileComponent Component');
    this.text = 'Hello World';
  }

  getSub(id: number) {
    this.tiles = this.mcp.getMenu(id);
  }

  goToRecord(tile: any) {
    this.navCtrl.push(MedicalRecordDetailPage, 
      {
        'id': tile.id,
        'title': tile.name
      });
  }
}
