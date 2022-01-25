import { exchangesAPI } from '../api/api';

const SET_EXCHANGES = 'SET_EXCHANGES'
const SET_COURSE = 'SET_COURSE'

let initialState = {
    exchanges: [],
    course: {}
}

const exchangeReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_EXCHANGES: {
            return { ...state, exchanges: action.exchanges }
        }
        case SET_COURSE: {
            return { ...state, course: action.course }
        }
        default: {
            return state
        }
    }
}


export const setExchanges = (exchanges: any) => ({ type: SET_EXCHANGES, exchanges })
export const setCourse = (course: any) => ({ type: SET_COURSE, course })

export const getExchanges = () => {

    return (dispatch: any) => {

        exchangesAPI.getExchanges()
            .then(response => {
                dispatch(setExchanges(response))
            });
    }
}

export default exchangeReducer