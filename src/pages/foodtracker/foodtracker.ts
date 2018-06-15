import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TrackersProvider } from './../../providers/trackers/trackers';
import { QuestionProvider } from './../../providers/question/question';

/**
 * Generated class for the FoodtrackerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-foodtracker',
  templateUrl: 'foodtracker.html',
})
export class FoodtrackerPage implements OnInit {

  foodtracker: string = "track";
  foodForm: FormGroup;
  food: any;
  foods: any[];
  nowTime: string;
  errMess: string;
  fooddate: string[];

  questions: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder,
    private trackerService: TrackersProvider,
    private qp: QuestionProvider) {

    this.questions = qp.getTrackersQuestions(1);
    this.createForm();

  }

  createForm() {
    this.nowTime = new Date().toISOString();
    this.foodForm = this.fb.group({
      name: ['', Validators.required],
      weight: ['', Validators.required],
      timeperiod: ['Breakfast', Validators.required],
      date: [this.nowTime, Validators.required]
    });
  }

  ngOnInit() {
    // this.trackerService.getFoods()
    //   .subscribe(foods => {
    //     foods.sort((a: Food, b: Food) => {
    //       var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
    //       var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
    //       if (shortdate_a > shortdate_b) {
    //         return -1;
    //       }
    //       if (shortdate_a < shortdate_b) {
    //         return 1;
    //       }
    //       if (a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 8 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -2 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -10) {
    //         return -1;
    //       }
    //       if (a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -8 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 2 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 10) {
    //         return 1;
    //       }
    //     });
    //     foods.forEach(food => {
    //       console.log(food.timeperiod, food.date);
    //     });
    //     console.log('Breakfast'.charCodeAt(0));
    //     console.log('Lunch'.charCodeAt(0));
    //     console.log('Dinner'.charCodeAt(0));
    //     this.foods = foods;
    //   }, errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodtrackerPage');
  }

  doRefresh(refresher) {
    // console.log('Begin async operation', refresher);
    // setTimeout(() => {
    //   this.trackerService.getFoods()
    //     .subscribe(foods => {
    //       foods.sort((a: Food, b: Food) => {
    //         var shortdate_a = new Date(new Date(a.date).getFullYear(), new Date(a.date).getMonth() - 1, new Date(a.date).getDate());
    //         var shortdate_b = new Date(new Date(b.date).getFullYear(), new Date(b.date).getMonth() - 1, new Date(b.date).getDate());
    //         if (shortdate_a > shortdate_b) {
    //           return -1;
    //         }
    //         if (shortdate_a < shortdate_b) {
    //           return 1;
    //         }
    //         if (a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 8 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -2 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -10) {
    //           return -1;
    //         }
    //         if (a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -8 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 2 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 10) {
    //           return 1;
    //         }
    //       });
    //       this.foods = foods;
    //     }, errmess => this.errMess = <any>errmess);
    //   console.log('Async operation has ended');
    //   refresher.complete();
    // }, 1500);
  }

  onSubmit() {
    this.food = this.foodForm.value;
    //var tzoffset = (new Date()).getTimezoneOffset() * 60000; //offset in milliseconds
    //var localISOTime = (new Date(Date.now() - tzoffset)).toISOString().slice(0, -1);
    // this.trackerService.addFood(this.food);
    this.createForm();
  }

}
