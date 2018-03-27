import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TrackersProvider } from './../../providers/trackers/trackers';

import { Alcohol } from './../../shared/alcohol';

/**
 * Generated class for the AlcoholtrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alcoholtracker',
  templateUrl: 'alcoholtracker.html',
})
export class AlcoholtrackerPage implements OnInit {

  alcoholtracker: string = "track";
  alcoholForm: FormGroup;
  alcohol: Alcohol;
  alcohols: Alcohol[];
  nowTime: string;
  errMess: string;
  alcoholdate: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder,
    private trackerService: TrackersProvider) {

    this.createForm();

  }

  createForm() {
    this.nowTime = new Date().toISOString();
    this.alcoholForm = this.fb.group({
      percentage: ['', Validators.required],
      volume: ['', Validators.required],
      date: [this.nowTime, Validators.required]
    });
  }

  ngOnInit() {
    this.trackerService.getAlcohols()
      .subscribe(alcohols => {
        alcohols.sort((a: Alcohol, b: Alcohol) => {
          var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
          var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
          if (shortdate_a > shortdate_b) {
            return -1;
          }
          if (shortdate_a < shortdate_b) {
            return 1;
          }
        });
        this.alcohols = alcohols;
      }, errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AlcoholtrackerPage');
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      this.trackerService.getAlcohols()
        .subscribe(alcohols => {
          alcohols.sort((a: Alcohol, b: Alcohol) => {
            var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
            var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
            if (shortdate_a > shortdate_b) {
              return -1;
            }
            if (shortdate_a < shortdate_b) {
              return 1;
            }
          });
          this.alcohols = alcohols;
        }, errmess => this.errMess = <any>errmess);
      console.log('Async operation has ended');
      refresher.complete();
    }, 1500);
  }

  onSubmit() {
    this.alcohol = this.alcoholForm.value;
    this.trackerService.addAlcohol(this.alcohol);
    this.createForm();
  }

}
