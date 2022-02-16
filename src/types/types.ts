export interface ExchangeState {
    exchanges: any[];
    course: object;
}

export enum ExchangeActionTypes {
    SET_EXCHANGES = 'SET_EXCHANGES',
    SET_COURSE = 'SET_COURSE'
}

interface ExchangesAction {
    type: ExchangeActionTypes.SET_EXCHANGES;
    exchanges: any[];
}

interface CourseAction {
    type: ExchangeActionTypes.SET_COURSE;
    course: object;
}

export type ExchangeAction = ExchangesAction | CourseAction;

export interface IExchanges {
    r030: number;
    txt: string;
    rate: number;
    cc: string
}