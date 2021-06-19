import {createStore} from 'redux';
import {calReducer} from './calReducer';
import {initialState} from './calReducer';

export const store  = createStore(calReducer, initialState);