import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import exchangeReducer from "./exchange-reduser";


let reducers = combineReducers({
    exchange: exchangeReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store