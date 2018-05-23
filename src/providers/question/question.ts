import { Injectable } from '@angular/core';

import { QuestionOptionProvider } from '../question-option/question-option';

import { QuestionBase } from './../../shared/question-base';
import { TextboxQuestion } from './../../components/dynamic-form-types/question-textbox';
import { DatetimeQuestion } from './../../components/dynamic-form-types/question-datetime';
import { DropdownQuestion } from './../../components/dynamic-form-types/question-dropdown';
import { TextareaQuestion } from './../../components/dynamic-form-types/question-textarea';
import { ToggleQuestion } from './../../components/dynamic-form-types/question-toggle';

/*
  Generated class for the QuestionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionProvider {

  constructor(private qop: QuestionOptionProvider) { }

  getQuestions() {
    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'food',
        label: 'Food',
        type: 'text',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'weight',
        label: 'Weight',
        type: 'text',
        value: '',
        required: true,
        order: 2
      }),

      new DropdownQuestion({
        key: 'timeperiod',
        label: 'Time Period',
        value: 'breakfast',
        multiple: false,
        options: [
          { key: 'breakfast', value: 'Breakfast' },
          { key: 'lunch', value: 'Lunch' },
          { key: 'dinner', value: 'Dinner' },
          { key: 'snack', value: 'Snack' }
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
        type: 'text',
        value: '',
        required: false,
        order: 2
      }),

      new TextboxQuestion({
        key: 'symptom',
        label: 'Symptom',
        type: 'text',
        value: '',
        required: true,
        order: 1
      }),

      new ToggleQuestion({
        key: 'threatening',
        label: 'Life Threatening',
        value: false,
        order: 3
      }),

      new DatetimeQuestion({
        key: 'datetime',
        label: 'Onset Date',
        value: '',
        required: true,
        order: 4
      }),

    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getFamilyHistoryQuestions() {
    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'relationship',
        label: 'Relationship',
        type: 'text',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'name',
        label: 'Name',
        type: 'text',
        value: '',
        required: false,
        order: 2
      }),

      new ToggleQuestion({
        key: 'alive',
        label: 'Alive',
        value: true,
        order: 3
      }),

      new TextboxQuestion({
        key: 'disease',
        label: 'Disease',
        type: 'text',
        value: '',
        required: true,
        order: 4
      }),

      new DatetimeQuestion({
        key: 'date',
        label: 'Onset Date',
        value: '',
        required: true,
        order: 5
      }),

    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getMedicalHistoryQuestions() {
    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'diagnosis',
        label: 'Diagnosis',
        type: 'text',
        value: '',
        required: true,
        order: 1
      }),

      new DatetimeQuestion({
        key: 'date',
        label: 'Onset Date',
        value: '',
        required: true,
        order: 2
      }),

    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getSurgicalHistoryQuestions() {
    let option = this.qop.getDoctorOption();
    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'sugery',
        label: 'Sugery',
        type: 'text',
        value: '',
        required: true,
        order: 1
      }),

      new DropdownQuestion({
        key: 'doctor',
        label: 'Doctor',
        value: '',
        multiple: false,
        options: option,
        order: 2
      }),

      new DatetimeQuestion({
        key: 'date',
        label: 'Onset Date',
        value: '',
        required: true,
        order: 3
      }),

    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getImmunizationQuestions() {
    let questions: QuestionBase<any>[] = [
  
      new TextboxQuestion({
        key: 'vaccine',
        label: 'Vaccine',
        type: 'text',
        value: '',
        required: true,
        order: 1
      }),

      new TextboxQuestion({
        key: 'age',
        label: 'Age',
        type: 'number',
        value: '',
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        key: 'schedule',
        label: 'Schedule',
        type: 'text',
        value: '',
        required: true,
        order: 3
      }),

      new DatetimeQuestion({
        key: 'date',
        label: 'Date',
        value: '',
        required: true,
        order: 4
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getDoctorVisitNotesQuestions() {
    let option = this.qop.getDoctorOption();
    let questions: QuestionBase<any>[] = [
  
      new TextboxQuestion({
        key: 'diagnosis',
        label: 'Diagnosis',
        type: 'text',
        value: '',
        required: true,
        order: 1
      }),

      new DropdownQuestion({
        key: 'doctor',
        label: 'Doctor',
        value: '',
        multiple: false,
        options: option,
        order: 2
      }),

      new TextboxQuestion({
        key: 'prescription',
        label: 'Prescription',
        type: 'text',
        value: '',
        required: true,
        order: 3
      }),

      new DatetimeQuestion({
        key: 'date',
        label: 'Date',
        value: '',
        required: true,
        order: 4
      }),

      new TextareaQuestion({
        key: 'reason',
        label: 'Reason of Visit',
        value: '',
        rows: 12,
        required: false,
        order: 5
      }),

    ];

    return questions.sort((a, b) => a.order - b.order);
  }

}
