import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import bagReducer from "./reducers/bag-reducer";
import iphoneItemReducer from "./reducers/iphoneItem-reducer";
import iphonesReducer from "./reducers/iphones-reducer";

const reducers = combineReducers({
	iphonesStore: iphonesReducer,
	iphoneItemStore: iphoneItemReducer,
	bagStore: bagReducer,
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store