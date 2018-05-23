import { QuestionBase } from './../../shared/question-base';

export class TextareaQuestion extends QuestionBase<string> {
    controlType = 'textarea';
    rows: number;

    constructor(options: {} = {}) {
        super(options);
        this.rows = options['rows'] || 5;
    }
}