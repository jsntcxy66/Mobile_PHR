import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TrackersProvider } from './../../providers/trackers/trackers';

import { Food } from './../../shared/food';

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
  food: Food;
  foods: Food[];
  nowTime: string;
  errMess: string;
  fooddate: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private fb: FormBuilder,
    private trackerService: TrackersProvider) {

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
    this.trackerService.getFoods()
      .subscribe(foods => {
        foods.sort((a: Food, b: Food) => {
          var shortdate_a = new Date(a.date).toDateString();
          var shortdate_b = new Date(b.date).toDateString();
          if (shortdate_a > shortdate_b) {
            return -1;
          }
          if (shortdate_a < shortdate_b) {
            return 1;
          }
          if (a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 8 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -2 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -10) {
            return -1;
          }
          if (a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == -8 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 2 || a.timeperiod.charCodeAt(0) - b.timeperiod.charCodeAt(0) == 10) {
            return 1;
          }
        });
        foods.forEach(food => {
          console.log(food.timeperiod, new Date(food.date).toISOString());
        });
        console.log('Breakfast'.charCodeAt(0));
        console.log('Lunch'.charCodeAt(0));
        console.log('Dinner'.charCodeAt(0));
        this.foods = foods;
      }, errmess => this.errMess = <any>errmess);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FoodtrackerPage');
  }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      this.trackerService.getFoods()
        .subscribe(foods => {
          foods.sort((a: Food, b: Food) => {
            return +new Date(a.date) - +new Date(b.date);
          });
          foods.reverse();
          this.foods = foods;
        }, errmess => this.errMess = <any>errmess);
      console.log('Async operation has ended');
      refresher.complete();
    }, 1500);
  }

  onSubmit() {
    this.food = this.foodForm.value;
    this.trackerService.addFood(this.food);
    this.createForm();
  }

}
