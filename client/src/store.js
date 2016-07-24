import {createStore, combineReducers} from "redux";
import globalReducerCreator from "./reducers/globalReducerCreator.js";


const combinedReducer = combineReducers({

})

const globalReducer = globalReducerCreator(combinedReducer);
const previousState = undefined;
const store = createStore(globalReducer, previousState, window.devToolsExtension ? window.devToolsExtension() : undefined);
export default store;