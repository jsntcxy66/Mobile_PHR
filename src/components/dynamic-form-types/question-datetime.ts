import { QuestionBase } from './../../shared/question-base';

export class DatetimeQuestion extends QuestionBase<string> {
    controlType = 'datetime';

    constructor(options: {} = {}) {
        super(options);
    }
}