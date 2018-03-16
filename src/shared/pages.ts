import { Subpages } from './subpages';

export interface Pages {
    title: string,
    icon: string,
    open: boolean,
    component?: any,
    children?: Subpages[]
}