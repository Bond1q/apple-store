import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import bagReducer from "./reducers/bag-reducer";
import ipadItemReducer from "./reducers/ipadItem-reducer";
import ipadsReducer from "./reducers/ipads-reducer";
import iphoneItemReducer from "./reducers/iphoneItem-reducer";
import iphonesReducer from "./reducers/iphones-reducer";

const reducers = combineReducers({
	iphonesStore: iphonesReducer,
	iphoneItemStore: iphoneItemReducer,
	bagStore: bagReducer,
	ipadsStore: ipadsReducer,
	ipadItemStore: ipadItemReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store