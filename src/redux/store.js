import { applyMiddleware, combineReducers, createStore } from "redux";
import iphones from "./reducers/iphones";

const reducers = combineReducers({
	iphonePage: iphones,
})

const store = createStore(reducers)

export default store