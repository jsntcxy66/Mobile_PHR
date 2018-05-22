import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
export class DynamicFormQuestionComponent implements OnInit{
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;

  get isValid() { return this.form.controls[this.question.key].valid; }

  constructor() {
    
  }
  ngOnInit() {
    console.log(this.question);
    this.form.patchValue(
      {
        datetime: new Date().toISOString()
      }
    );
  }
}
