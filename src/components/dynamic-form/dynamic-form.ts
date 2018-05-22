import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlProvider } from './../../providers/question-control/question-control';

import { QuestionBase } from './../../shared/question-base';
import { ViewController, ToastController } from 'ionic-angular';

/**
 * Generated class for the DynamicFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dynamic-form',
  templateUrl: 'dynamic-form.html'
})
export class DynamicFormComponent {
@Input() questions: QuestionBase<any>[] = [];

  form: FormGroup;
  payLoad = '';

  constructor(private qcp: QuestionControlProvider,
    private viewCtrl: ViewController,
    private toastCtrl: ToastController) {
    console.log('Hello DynamicFormComponent Component');
  }

  ngOnInit() {
    this.form = this.qcp.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = this.form.value;
    console.log(this.payLoad);
    this.toastCtrl.create({
      message: 'Successfully added',
      position: 'bottom',
      duration: 2000
    }).present();
    this.viewCtrl.dismiss();
  }

}
