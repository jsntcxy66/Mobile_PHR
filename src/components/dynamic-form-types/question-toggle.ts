import { QuestionBase } from './../../shared/question-base';

export class ToggleQuestion extends QuestionBase<boolean> {
    controlType = 'toggle';

    constructor(options: {} = {}) {
        super(options);
    }
}
