import {applyMiddleware, createStore, combineReducers } from 'redux';
import staffReducer from './staff-reducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import locationReducer from './location-reducer';



let reducers = combineReducers({
    staffPage: staffReducer,
    locationPage: locationReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;