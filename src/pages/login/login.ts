import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { DashboardPage } from './../dashboard/dashboard';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  loading: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder,
    private menuCtrl: MenuController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private authService: AuthServiceProvider) {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

  onSubmit() {
    this.showLoader('Authenticating...');
    let credentials = this.loginForm.value;
    credentials['username'] = this.loginForm.value.username.toLowerCase();
    console.log(credentials);
    this.authService.login(credentials)
      .subscribe((res: number) => {
        this.loading.dismiss();
        this.navCtrl.setRoot(DashboardPage);
        this.menuCtrl.enable(true);
      },
        err => {
          this.loading.dismiss();
          this.presentToast('Login failed! Please try again. ' + err);
          console.log(err);
        }
      );
  }

  showLoader(msg) {
    this.loading = this.loadingCtrl.create({
      content: msg
    });
    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: false
    });
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
    toast.present();
  }

}
