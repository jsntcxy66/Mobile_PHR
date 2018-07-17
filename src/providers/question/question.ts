import { Injectable } from '@angular/core';
import * as moment from 'moment';

import { QuestionOptionProvider } from '../question-option/question-option';

import { QuestionBase } from './../../shared/question-base';
import { TextboxQuestion } from './../../components/dynamic-form-types/question-textbox';
import { DatetimeQuestion } from './../../components/dynamic-form-types/question-datetime';
import { DropdownQuestion } from './../../components/dynamic-form-types/question-dropdown';
import { TextareaQuestion } from './../../components/dynamic-form-types/question-textarea';
import { ToggleQuestion } from './../../components/dynamic-form-types/question-toggle';
import { RangeQuestion } from './../../components/dynamic-form-types/question-range';
import { ComplexQuestion } from '../../components/dynamic-form-types/question-complex';

/*
  Generated class for the QuestionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuestionProvider {

  constructor(private qop: QuestionOptionProvider) { }

  getTrackersQuestions(id: number) {
    let questions: QuestionBase<any>[];
    if (id == 1) {
      questions = [

        new TextboxQuestion({
          key: 'food',
          label: 'Food',
          type: 'text',
          value: '',
          required: true,
          order: 1
        }),

        new TextboxQuestion({
          key: 'amount',
          label: 'Amount',
          type: 'text',
          value: '',
          required: true,
          order: 2
        }),

        new TextboxQuestion({
          key: 'calories',
          label: 'Calories',
          type: 'number',
          value: '',
          required: false,
          order: 3
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
          required: true,
          order: 4
        }),

        new DatetimeQuestion({
          key: 'datetime',
          label: 'Date',
          display: 'MMM DD, YYYY HH:mm',
          value: moment().format(),
          required: true,
          order: 5
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          rows: 3,
          required: false,
          order: 6
        }),

      ];

    }
    else if (id == 2) {
      questions = [

        new TextboxQuestion({
          key: 'drink',
          label: 'Drink',
          type: 'text',
          value: '',
          required: true,
          order: 1
        }),

        new TextboxQuestion({
          key: 'amount',
          label: 'Amount',
          type: 'text',
          value: '',
          required: true,
          order: 2
        }),

        new TextboxQuestion({
          key: 'unit',
          label: 'Unit',
          type: 'text',
          value: '',
          required: true,
          order: 3
        }),

        new DatetimeQuestion({
          key: 'datetime',
          label: 'Date',
          display: 'MMM DD, YYYY HH:mm',
          value: moment().format(),
          required: true,
          order: 4
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          rows: 3,
          required: false,
          order: 5
        }),

      ];
    }
    else if (id == 3) {
      questions = [

        new TextboxQuestion({
          key: 'weight',
          label: 'Weight',
          type: 'number',
          unit: 'lb',
          value: '',
          required: true,
          order: 1
        }),

        new DatetimeQuestion({
          key: 'date',
          label: 'Date',
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 2
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          rows: 3,
          required: false,
          order: 3
        }),

      ];

    }
    else if (id == 4) {
      questions = [

        new TextboxQuestion({
          key: 'height',
          label: 'Height',
          type: 'text',
          value: '',
          required: true,
          order: 1
        }),

        new DatetimeQuestion({
          key: 'date',
          label: 'Date',
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 2
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          rows: 3,
          required: false,
          order: 3
        }),

      ];

    }
    else if (id == 5) {
      questions = [

        new DatetimeQuestion({
          key: 'bedtime',
          label: 'Bedtime',
          display: 'MMM DD, YYYY HH:mm',
          value: '',
          required: true,
          order: 1
        }),

        new DatetimeQuestion({
          key: 'wakeuptime',
          label: 'Wake-up time',
          display: 'MMM DD, YYYY HH:mm',
          value: '',
          required: true,
          order: 2
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          rows: 3,
          required: false,
          order: 3
        }),

      ];
    }
    else if (id == 6) {
      questions = [

        new TextboxQuestion({
          key: 'exercise',
          label: 'Exercise',
          type: 'text',
          value: '',
          required: true,
          order: 1
        }),

        new TextboxQuestion({
          key: 'duration',
          label: 'Duration',
          type: 'text',
          value: '',
          required: true,
          order: 2
        }),

        new DatetimeQuestion({
          key: 'datetime',
          label: 'Date',
          display: 'MMM DD, YYYY HH:mm',
          value: moment().format(),
          required: true,
          order: 3
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          rows: 3,
          required: false,
          order: 4
        }),

      ];

    }
    else if (id == 7) {
      questions = [

        new TextboxQuestion({
          key: 'SBP',
          label: 'Systolic pressure (SBP)',
          type: 'number',
          unit: 'mm Hg',
          value: '',
          required: true,
          order: 1
        }),

        new TextboxQuestion({
          key: 'DBP',
          label: 'Diastolic pressure (DBP)',
          type: 'number',
          unit: 'mm Hg',
          value: '',
          required: true,
          order: 2
        }),

        new DatetimeQuestion({
          key: 'date',
          label: 'Date',
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 3
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          rows: 3,
          required: false,
          order: 4
        }),

      ];
    }
    else if (id == 8) {
      questions = [

        new TextboxQuestion({
          key: 'bloodsugar',
          label: 'Blood sugar',
          type: 'number',
          unit: 'mg/dl',
          value: '',
          required: true,
          order: 1
        }),

        new DatetimeQuestion({
          key: 'date',
          label: 'Date',
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 2
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          rows: 3,
          required: false,
          order: 3
        }),

      ];
    }
    else if (id == 9) {
      questions = [

        new RangeQuestion({
          key: 'pain',
          label: 'Pain level',
          min: 0,
          max: 10,
          step: 1,
          snaps: true,
          pin: true,
          color: 'primary',
          iconleft: 'sad',
          iconright: 'happy',
          required: true,
          order: 1
        }),

        new DatetimeQuestion({
          key: 'date',
          label: 'Date',
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 2
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          rows: 3,
          required: false,
          order: 3
        }),

      ];
    }
    else if (id == 10) {
      questions = [

        new DatetimeQuestion({
          key: 'datetime',
          label: 'Date',
          display: 'MMM DD, YYYY HH:mm',
          value: moment().format(),
          required: true,
          order: 1
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          rows: 5,
          required: true,
          order: 2
        }),

      ];
    }
    else if (id == 11) {
      questions = [

        new DropdownQuestion({
          key: 'mood',
          label: 'Mood',
          value: '',
          multiple: false,
          options: [
            { key: "1 - Everything's OK. I'm maintaining.", value: "1 - Everything's OK. I'm maintaining." },
            { key: "2 - I've had a rough day.", value: "2 - I've had a rough day." },
            { key: "3 - Significant life event/stress. It may take longer time to cope.", value: "3 - Significant life event/stress. It may take longer time to cope." },
            { key: "4 - I've been down for a while and I don't exactly know why.", value: "4 - I've been down for a while and I don't exactly know why." },
            { key: "5 - I'm not doing well and I'd like someone to keep an eye on me/check-in regularly.", value: "5 - I'm not doing well and I'd like someone to keep an eye on me/check-in regularly." },
            { key: "6 - I'm in crisis. Please call or come over right away.", value: "6 - I'm in crisis. Please call or come over right away." },
            { key: "7 - Call 911. I may hurt myself or others. Do NOT wait.", value: "7 - Call 911. I may hurt myself or others. Do NOT wait." }
          ],
          required: true,
          order: 1
        }),

        new DatetimeQuestion({
          key: 'date',
          label: 'Date',
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 2
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          rows: 3,
          required: false,
          order: 3
        }),

      ];
    }
    else if (id == 12) {
      questions = [

        new DatetimeQuestion({
          key: 'begindate',
          label: 'Begin date',
          display: 'MM/DD/YYYY',
          value: '',
          required: true,
          order: 1
        }),

        new DatetimeQuestion({
          key: 'enddate',
          label: 'End date',
          display: 'MM/DD/YYYY',
          value: '',
          required: true,
          order: 2
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          rows: 3,
          required: false,
          order: 3
        }),

      ];
    }

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
        required: true,
        order: 3
      }),

      new DatetimeQuestion({
        key: 'date',
        label: 'Onset Date',
        display: 'MM/DD/YYYY',
        value: moment().format(),
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
        display: 'MM/DD/YYYY',
        value: moment().format(),
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
        display: 'MM/DD/YYYY',
        value: moment().format(),
        required: true,
        order: 2
      }),

    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  async getSurgicalHistoryQuestions(id: number) {
    let option = <{ key: string, value: string }[]>await this.qop.getDoctorOption(id);
    let questions: QuestionBase<any>[];
    if (option.length != 0) {
      questions = [

        new TextboxQuestion({
          key: 'surgery',
          label: 'Surgery',
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
          required: true,
          order: 2
        }),

        new DatetimeQuestion({
          key: 'date',
          label: 'Onset Date',
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 3
        }),

      ];
    } else {
      questions = [

        new TextboxQuestion({
          key: 'surgery',
          label: 'Surgery',
          type: 'text',
          value: '',
          required: true,
          order: 1
        }),

        new TextareaQuestion({
          key: 'doctor',
          label: 'Doctor',
          readonly: true,
          placeholder: 'Doctor contact not found.',
          rows: 1,
          required: true,
          order: 2
        }),

        new DatetimeQuestion({
          key: 'date',
          label: 'Onset Date',
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 3
        }),

      ];
    }


    return questions.sort((a, b) => a.order - b.order);
  }

  getImmunizationQuestions(vaccine: string) {
    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'vaccine',
        label: 'Vaccine',
        type: 'text',
        value: vaccine,
        required: true,
        order: 1
      }),

      new ComplexQuestion({
        selectkey: 'recordtype',
        selectlabel: 'Record option',
        selectvalue: 'age',
        selectrequired: true,
        multiple: false,
        options: [
          { key: 'age', value: 'Age' },
          { key: 'scheduledate', value: 'Date' }
        ],
        
        inputkey: 'age',
        inputlabel: 'Age',
        inputvalue: '',
        inputrequired: true,
        type: 'number',
        
        datetimekey: 'scheduledate',
        datetimelabel: 'Schedule date',
        datetimevalue: '',
        datetimerequired: true,
        display: 'MMM YYYY',

        required: true,
        order: 2
      }),

      new TextareaQuestion({
        key: 'note',
        label: 'Notes',
        rows: 3,
        required: false,
        order: 3
      }),

    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  async getDoctorVisitNotesQuestions(id: number) {
    let option = <{ key: string, value: string }[]>await this.qop.getDoctorOption(id);
    let questions: QuestionBase<any>[];
    if (option.length != 0) {
      questions = [

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
          required: true,
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
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 4
        }),

        new TextareaQuestion({
          key: 'reason',
          label: 'Reason of Visit',
          value: '',
          rows: 7,
          required: false,
          order: 5
        }),

      ];
    } else {
      questions = [

        new TextboxQuestion({
          key: 'diagnosis',
          label: 'Diagnosis',
          type: 'text',
          value: '',
          required: true,
          order: 1
        }),

        new TextareaQuestion({
          key: 'doctor',
          label: 'Doctor',
          readonly: true,
          placeholder: 'Doctor contact not found.',
          rows: 1,
          required: true,
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
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 4
        }),

        new TextareaQuestion({
          key: 'reason',
          label: 'Reason of Visit',
          value: '',
          rows: 7,
          required: false,
          order: 5
        }),

      ];
    }


    return questions.sort((a, b) => a.order - b.order);
  }

  getSocialHistoryQuestions(id: number) {
    if (id == 1) {
      let questions: QuestionBase<any>[] = [

        new TextboxQuestion({
          key: 'amount',
          label: 'Amount',
          type: 'number',
          value: '',
          required: true,
          order: 1
        }),

        new DatetimeQuestion({
          key: 'date',
          label: 'Date',
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 2
        }),
      ];

      return questions.sort((a, b) => a.order - b.order);
    }
    else if (id == 2) {
      let questions: QuestionBase<any>[] = [

        new TextboxQuestion({
          key: 'name',
          label: 'Name',
          type: 'text',
          value: '',
          required: true,
          order: 1
        }),

        new TextboxQuestion({
          key: 'amount',
          label: 'Amount(oz)',
          type: 'number',
          value: '',
          required: true,
          order: 2
        }),

        new TextboxQuestion({
          key: 'alcohol',
          label: 'Alcohol(%)',
          type: 'number',
          value: '',
          required: true,
          order: 3
        }),

        new DatetimeQuestion({
          key: 'date',
          label: 'Date',
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 4
        }),
      ];

      return questions.sort((a, b) => a.order - b.order);
    }
    else if (id == 3) {
      let questions: QuestionBase<any>[] = [

        new TextboxQuestion({
          key: 'name',
          label: 'Name',
          type: 'text',
          value: '',
          required: true,
          order: 1
        }),

        new TextboxQuestion({
          key: 'amount',
          label: 'Amount',
          type: 'number',
          value: '',
          required: true,
          order: 2
        }),

        new DatetimeQuestion({
          key: 'date',
          label: 'Date',
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 3
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          value: '',
          rows: 3,
          required: false,
          order: 4
        }),
      ];

      return questions.sort((a, b) => a.order - b.order);
    }
    else if (id == 4) {
      let questions: QuestionBase<any>[] = [

        new TextboxQuestion({
          key: 'location',
          label: 'Location',
          type: 'text',
          value: '',
          required: true,
          order: 1
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          value: '',
          rows: 5,
          required: false,
          order: 3
        }),

        new DatetimeQuestion({
          key: 'date',
          label: 'Date',
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 2
        }),
      ];

      return questions.sort((a, b) => a.order - b.order);
    }
    else if (id == 5) {
      let questions: QuestionBase<any>[] = [

        new TextboxQuestion({
          key: 'type',
          label: 'Type',
          type: 'text',
          value: '',
          required: true,
          order: 1
        }),

        new DatetimeQuestion({
          key: 'moveindate',
          label: 'Move in',
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 2
        }),

        new DatetimeQuestion({
          key: 'moveoutdate',
          label: 'Move out',
          display: 'MM/DD/YYYY',
          value: '',
          required: false,
          order: 3
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          value: '',
          rows: 3,
          required: false,
          order: 4
        }),
      ];

      return questions.sort((a, b) => a.order - b.order);
    }
  }

  getMedicationQuestions() {
    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'name',
        label: 'Medication Name',
        type: 'text',
        value: '',
        required: true,
        order: 1
      }),

      new TextareaQuestion({
        key: 'frequency',
        label: 'Frequency',
        value: '',
        rows: 2,
        required: true,
        order: 2
      }),

      new DatetimeQuestion({
        key: 'date',
        label: 'Date',
        display: 'MM/DD/YYYY',
        value: moment().format(),
        required: true,
        order: 3
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getLabTestQuestions(title: string) {
    let questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'subtest',
        label: 'Test Name',
        type: 'text',
        value: title,
        required: true,
        order: 1
      }),

      new DatetimeQuestion({
        key: 'date',
        label: 'Date',
        display: 'MM/DD/YYYY',
        value: moment().format(),
        required: true,
        order: 2
      }),

      new TextboxQuestion({
        key: 'result',
        label: 'Result',
        type: 'text',
        value: '',
        required: true,
        order: 3
      }),

      new TextboxQuestion({
        key: 'unit',
        label: 'Unit',
        type: 'text',
        value: '',
        required: false,
        order: 4
      }),

      new ToggleQuestion({
        key: 'abnormal',
        label: 'Abnormal?',
        value: false,
        order: 5
      }),

      new TextareaQuestion({
        key: 'note',
        label: 'Notes',
        value: '',
        rows: 4,
        required: false,
        order: 6
      }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }

  getDiagnosticProcedureQuestions(title: string, id: number) {
    let questions: QuestionBase<any>[];
    if (id == 1 || id == 6 || id == 7 || id == 8) {
      questions = [

        new TextboxQuestion({
          key: 'name',
          label: 'Test Name',
          type: 'text',
          value: title,
          required: true,
          order: 1
        }),

        new TextboxQuestion({
          key: 'result',
          label: 'Result',
          type: 'text',
          value: '',
          required: true,
          order: 2
        }),

        new DatetimeQuestion({
          key: 'date',
          label: 'Date',
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 3
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          value: '',
          rows: 5,
          required: false,
          order: 4
        }),
      ];

    }
    else if (id == 2 || id == 5) {
      questions = [

        new TextboxQuestion({
          key: 'organ',
          label: 'Body Part',
          type: 'text',
          value: '',
          required: true,
          order: 1
        }),

        new TextboxQuestion({
          key: 'result',
          label: 'Result',
          type: 'text',
          value: '',
          required: true,
          order: 2
        }),

        new DatetimeQuestion({
          key: 'date',
          label: 'Date',
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 3
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          value: '',
          rows: 5,
          required: false,
          order: 4
        }),
      ];

    }
    else if (id == 3 || id == 4) {
      questions = [

        new TextboxQuestion({
          key: 'organ',
          label: 'Body Part',
          type: 'text',
          value: '',
          required: true,
          order: 1
        }),

        new TextboxQuestion({
          key: 'result',
          label: 'Result',
          type: 'text',
          value: '',
          required: true,
          order: 2
        }),

        new ToggleQuestion({
          key: 'contrast',
          label: 'With Contrast?',
          value: false,
          required: true,
          order: 3
        }),

        new DatetimeQuestion({
          key: 'date',
          label: 'Date',
          display: 'MM/DD/YYYY',
          value: moment().format(),
          required: true,
          order: 4
        }),

        new TextareaQuestion({
          key: 'note',
          label: 'Notes',
          value: '',
          rows: 5,
          required: false,
          order: 5
        }),
      ];
    }

    return questions.sort((a, b) => a.order - b.order);
  }

  getResetPasswordQuestion(typeid: number) {
    let questions: QuestionBase<any>[];
    if (typeid == 0) {
      let secQues = "What is your first pet's name sadasdadasdassadasdadasdasda ???????";
      questions = [
        new TextboxQuestion({
          key: 'email',
          label: 'Email Address',
          type: 'email',
          value: '',
          required: true,
          order: 1
        }),

        new TextareaQuestion({
          key: 'securityQuestion',
          label: 'Security Question',
          type: 'text',
          value: secQues,
          rows: 1,
          readonly: true,
          order: 2
        }),

        new TextareaQuestion({
          key: 'securityAnswer',
          label: 'Security Answer',
          type: 'text',
          value: '',
          rows: 1,
          required: true,
          order: 3
        }),
      ];

      return questions.sort((a, b) => a.order - b.order);
    }
    else if (typeid == 1) {
      questions = [
        new TextboxQuestion({
          key: 'currentPassword',
          label: 'Current Password',
          type: 'password',
          value: '',
          required: true,
          order: 1
        }),

        new TextboxQuestion({
          key: 'newPassword',
          label: 'New Password',
          type: 'password',
          value: '',
          required: true,
          order: 2
        }),

        new TextboxQuestion({
          key: 'confirmPassword',
          label: 'Confirm Password',
          type: 'password',
          value: '',
          required: true,
          order: 3
        }),
      ];

      return questions.sort((a, b) => a.order - b.order);
    }
  }
}
