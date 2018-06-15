import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusBar } from '@ionic-native/status-bar';

import { TrackersProvider } from './../../providers/trackers/trackers';

import { Mytracker } from './../../shared/mytracker';

/**
 * Generated class for the CustomtrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customtracker',
  templateUrl: 'customtracker.html',
})
export class CustomtrackerPage {

  trackername: string;
  mytracker: Mytracker;
  mytrackers: Mytracker[];
  tracker: string = "track";
  myForm: FormGroup;
  nowTime: string;
  errMess: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private storage: Storage,
    private fb: FormBuilder,
    private trackerService: TrackersProvider,
    private viewCtrl: ViewController,
    private statusBar: StatusBar) {

    this.statusBar.overlaysWebView(false);

    this.storage.get('mytracker').then(mytracker => {
      if (mytracker) {
        this.trackername = mytracker.name;
      }
      else {
        this.trackername = 'My Tracker';
      }
    });

    this.createForm();

  }

  createForm() {
    this.nowTime = new Date().toISOString();
    this.myForm = this.fb.group({
      date: [this.nowTime, Validators.required],
      note: ['', Validators.required]
    });
  }

  ngOnInit() {
    // this.trackerService.getMytrackers()
    //   .subscribe(mytrackers => {
    //     mytrackers.sort((a: Mytracker, b: Mytracker) => {
    //       var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
    //       var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
    //       if (shortdate_a > shortdate_b) {
    //         return -1;
    //       }
    //       if (shortdate_a < shortdate_b) {
    //         return 1;
    //       }
    //     });
    //     this.mytrackers = mytrackers;
    //   }, errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomtrackerPage');
  }

  doRefresh(refresher) {
    // console.log('Begin async operation', refresher);
    // setTimeout(() => {
    //   this.trackerService.getMytrackers()
    //     .subscribe(mytrackers => {
    //       mytrackers.sort((a: Mytracker, b: Mytracker) => {
    //         var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
    //         var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
    //         if (shortdate_a > shortdate_b) {
    //           return -1;
    //         }
    //         if (shortdate_a < shortdate_b) {
    //           return 1;
    //         }
    //       });
    //       this.mytrackers = mytrackers;
    //     }, errmess => this.errMess = <any>errmess);
    //   console.log('Async operation has ended');
    //   refresher.complete();
    // }, 1500);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  onSubmit() {
    this.mytracker = this.myForm.value;
    this.createForm();
  }
}
