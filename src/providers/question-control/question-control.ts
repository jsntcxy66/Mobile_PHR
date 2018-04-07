import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

import { QuestionBase } from './../../shared/question-base';

/*
  Generated class for the QuestionControlProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionControlProvider {

  constructor() { }

  toFormGroup(questions: QuestionBase<any>[]) {
    let group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required) : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }

}
