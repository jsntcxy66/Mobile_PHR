import { QuestionBase } from './../../shared/question-base';

export class TextareaQuestion extends QuestionBase<string> {
    controlType = 'textarea';
    rows: number;
    readonly: boolean;
    placeholder: string;

    constructor(options: {} = {}) {
        super(options);
        this.rows = options['rows'] || 3;
        this.readonly = options['readonly'] || false;
        this.placeholder = options['placeholder'] || '';
    }
}