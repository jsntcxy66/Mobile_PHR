import { QuestionBase } from './../../shared/question-base';

export class DatetimeQuestion extends QuestionBase<string> {
    controlType = 'datetime';
    display: string;

    constructor(options: {} = {}) {
        super(options);
        this.display = options['display'] || 'MM/DD/YYYY';
    }
}