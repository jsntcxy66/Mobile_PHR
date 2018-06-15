import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { DoctorVisitNotesDetailPage } from '../doctor-visit-notes-detail/doctor-visit-notes-detail';
import { WelcomePage } from '../welcome/welcome';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the DoctorVisitNotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor-visit-notes',
  templateUrl: 'doctor-visit-notes.html',
})
export class DoctorVisitNotesPage {

  records: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private modalCtrl: ModalController,
    private auth: AuthServiceProvider,
    private alertCtrl: AlertController) {

    if (!this.auth.userId) {
      this.presentAlert('Please login first.');
    }

    this.records = [
      {
        diagnosis: 'influenza',
        doctor: 'Aaric Falconi',
        prescription: 'Have some rest',
        date: '2018/05/21',
        reason: 'feel a headache'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorVisitNotesPage');
  }

  addNotes() {
    let modal = this.modalCtrl.create(DoctorVisitNotesDetailPage);
    modal.present();
  }

  presentAlert(msg) {
    let alert = this.alertCtrl.create({
      title: 'Oops!',
      message: msg,
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.navCtrl.push(WelcomePage);
          }
        }
      ]
    });
    alert.present();
  }

}
