import { exchangesAPI } from '../api/api';
import { ExchangeAction, ExchangeActionTypes, ExchangeState } from '../types/types';

let initialState: ExchangeState = {
    exchanges: [],
    course: {}
}

const exchangeReducer = (state = initialState, action: ExchangeAction): ExchangeState => {
    switch (action.type) {
        case ExchangeActionTypes.SET_EXCHANGES: {
            return { ...state, exchanges: action.exchanges }
        }
        case ExchangeActionTypes.SET_COURSE: {
            return { ...state, course: action.course }
        }
        default: {
            return state
        }
    }
}


export const setExchanges = (exchanges: any[]) => ({ type: ExchangeActionTypes.SET_EXCHANGES, exchanges })
export const setCourse = (course: object) => ({ type: ExchangeActionTypes.SET_COURSE, course })

export const getExchanges = () => {

    return (dispatch: any) => {

        exchangesAPI.getExchanges()
            .then(response => {
                dispatch(setExchanges(response))
            });
    }
}

export default exchangeReducer