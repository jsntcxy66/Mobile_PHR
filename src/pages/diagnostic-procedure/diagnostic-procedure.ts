import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DiagnosticProcedureClassificationProvider } from '../../providers/diagnostic-procedure-classification/diagnostic-procedure-classification';

/**
 * Generated class for the DiagnosticProcedurePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-diagnostic-procedure',
  templateUrl: 'diagnostic-procedure.html',
})
export class DiagnosticProcedurePage {

  tiles: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private dpcp: DiagnosticProcedureClassificationProvider) {

    this.tiles = this.dpcp.getMenu(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiagnosticProcedurePage');
  }

}
