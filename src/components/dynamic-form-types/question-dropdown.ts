import { QuestionBase } from './../../shared/question-base';

export class DropdownQuestion extends QuestionBase<string> {
    controlType = 'dropdown';
    multiple: boolean;
    options: { key: string, value: string }[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.multiple = options['multiple'] || false;
        this.options = options['options'] || [];
    }
}
