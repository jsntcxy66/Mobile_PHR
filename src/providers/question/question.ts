import { Injectable } from '@angular/core';

import { QuestionBase } from './../../shared/question-base';
import { TextboxQuestion } from './../../components/dynamic-form-types/question-textbox';
import { DatetimeQuestion } from './../../components/dynamic-form-types/question-datetime';
import { DropdownQuestion } from './../../components/dynamic-form-types/question-dropdown';
import { TextareaQuestion } from './../../components/dynamic-form-types/question-textarea';

/*
  Generated class for the QuestionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionProvider {

  constructor() { }

  getQuestions() {

    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'food',
        label: 'Food',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'weight',
        label: 'Weight',
        value: '',
        required: true,
        order: 2
      }),

      new DropdownQuestion({
        key: 'timeperiod',
        label: 'Time Period',
        value: 'breakfast',
        options: [
          { key: 'breakfast', value: 'Breakfast' },
          { key: 'lunch', value: 'Lunch' },
          { key: 'dinner', value: 'Dinner' }
        ],
        order: 3
      }),

      new DatetimeQuestion({
        key: 'datetime',
        label: 'Date',
        value: new Date(),
        order: 4
      }),

    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getAllergyQuestions() {

    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'trigger',
        label: 'Trigger',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'symptom',
        label: 'Symptom',
        value: '',
        required: false,
        order: 2
      }),

      new DatetimeQuestion({
        key: 'datetime',
        label: 'Date',
        value: new Date(),
        order: 3
      }),

    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
