import { QuestionBase } from './../../shared/question-base';

export class RangeQuestion extends QuestionBase<string> {
    controlType = 'range';
    min: number;
    max: number;
    step: number;
    snaps: boolean;
    pin: boolean;
    color: string;
    iconleft: string;
    iconright: string;

    constructor(options: {} = {}) {
        super(options);
        this.min = options['min'] || 100;
        this.max = options['max'] || 0;
        this.step = options['step'] || 1;
        this.snaps = options['snaps'] || false;
        this.pin = options['pin'] || false;
        this.color = options['color'] || 'primary';
        this.iconleft = options['iconleft'] || '';
        this.iconright = options['iconright'] || '';
    }
}