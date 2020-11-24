
import {  applyMiddleware, compose, combineReducers, createStore } from "redux";
import { reducer as formReducer } from 'redux-form'
import logger from "redux-logger";
import thunk from "redux-thunk";
import surnameReducer from "./reducers/surrnameReducer"

const rootReducer = combineReducers({
   form:formReducer,
    surnameReducer,
  
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers(applyMiddleware(thunk,logger)));
export default store;
