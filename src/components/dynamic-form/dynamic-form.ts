import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlProvider } from './../../providers/question-control/question-control';

import { QuestionBase } from './../../shared/question-base';

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

  constructor(private qcp: QuestionControlProvider) {
    console.log('Hello DynamicFormComponent Component');
  }

  ngOnInit() {
    this.form = this.qcp.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
