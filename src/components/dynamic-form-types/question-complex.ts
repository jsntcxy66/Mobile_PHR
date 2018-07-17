import { QuestionBase } from './../../shared/question-base';

export class ComplexQuestion extends QuestionBase<string>  {
    controlType = 'complex';

    selectvalue: any;
    selectkey: string;
    selectlabel: string;
    selectrequired: boolean;
    multiple: boolean;
    options: { key: string, value: string }[] = [];

    inputvalue: any;
    inputkey: string;
    inputlabel: string;
    inputrequired: boolean;
    type: string;
    unit: string;
    readonly: boolean;

    datetimevalue: any;
    datetimekey: string;
    datetimelabel: string;
    datetimerequired: boolean;
    display: string;

    constructor(options: {} = {}) {
        super(options);

        this.selectvalue = options['selectvalue'] || '';
        this.selectkey = options['selectkey'] || '';
        this.selectlabel = options['selectlabel'] || '';
        this.selectrequired = !!options['selectrequired'];
        this.multiple = options['multiple'] || false;
        this.options = options['options'] || [];

        this.inputvalue = options['inputvalue'] || '';
        this.inputkey = options['inputkey'] || '';
        this.inputlabel = options['inputlabel'] || '';
        this.inputrequired = !!options['inputrequired'];
        this.type = options['type'] || '';
        this.unit = options['unit'] || '';
        this.readonly = options['readonly'] || false;

        this.datetimevalue = options['datetimevalue'] || '';
        this.datetimekey = options['datetimekey'] || '';
        this.datetimelabel = options['datetimelabel'] || '';
        this.datetimerequired = !!options['datetimerequired'];
        this.display = options['display'] || 'MM/DD/YYYY';

    }
}