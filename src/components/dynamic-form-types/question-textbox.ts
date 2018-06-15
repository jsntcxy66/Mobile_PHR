import { QuestionBase } from './../../shared/question-base';

export class TextboxQuestion extends QuestionBase<string> {
    controlType = 'textbox';
    type: string;
    unit: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
        this.unit = options['unit'] || '';
    }
}