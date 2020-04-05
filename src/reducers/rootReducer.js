import {combineReducers} from 'redux';
import { appReducer } from './appReducer';
import { tasksReducer } from './tasksReducer';
import { filterReducer } from './filterReducer';

export const rootReducer = combineReducers({
    tasks: tasksReducer,
    app: appReducer,
    filters: filterReducer
})