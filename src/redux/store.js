import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import iphonesReducer from "./reducers/iphones-reducer";

const reducers = combineReducers({
	iphonesStore: iphonesReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store