import { combineReducers } from 'redux';
import {dataReducer,todoReducer } from './reducers';


export default combineReducers({
    dataReducer,
    todoReducer
});
