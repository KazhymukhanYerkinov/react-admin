import {applyMiddleware, createStore, combineReducers } from 'redux';
import staffReducer from './staff-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth-reducer';
import appReducer from './app-reducer';
import requestReducer from './request-reducer';



let reducers = combineReducers({
    staffPage: staffReducer,
    authPage: authReducer,
    appPage: appReducer,
    requestPage: requestReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;