import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from "redux-thunk"
import exchangeReducer from "./exchange-reduser";


const reducers = combineReducers({
    exchange: exchangeReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store