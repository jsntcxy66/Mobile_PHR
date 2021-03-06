import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

import { QuestionBase } from './../../shared/question-base';

/**
 * Generated class for the DynamicFormQuestionComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dynamic-form-question',
  templateUrl: 'dynamic-form-question.html'
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  selectedOption: string = 'age';

  get isValid(): boolean {
    if (this.form.controls[this.question.key]) {
      return this.form.controls[this.question.key].valid;
    }
    else return true;
  }

  get controlUnderline(): boolean {
    if (this.form.controls[this.question.key]) {
      return ((!this.form.controls[this.question.key].pristine) && (!this.isValid));
    } else return false;
  }

  constructor() { }

  ngOnInit() {
    // dynamically change select option validators for immunization
    if (this.question.controlType == 'complex') {
      this.form.get('immunizationdate').setValidators(null);
      this.form.get('immunizationdate').updateValueAndValidity();
    }
    console.log(this.question);
  }

  // dynamically change select option validators for immunization
  selectedValue(ev) {
    console.log(ev);
    this.selectedOption = ev;
    if (this.selectedOption == 'age') {
      this.form.get('immunizationdate').setValidators(null);
      this.form.get('age').setValidators(Validators.required);
    } else {
      this.form.get('age').setValidators(null);
      this.form.get('immunizationdate').setValidators(Validators.required);
    }
    this.form.get('immunizationdate').updateValueAndValidity();
    this.form.get('age').updateValueAndValidity();
  }

}
