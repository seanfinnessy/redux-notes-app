import notesReducer from './notesReducer';
import visibilityFilter from './visibilityReducer';
import { combineReducers } from 'redux';

const reducers = combineReducers({
    notes: notesReducer,
    visibility: visibilityFilter
});

export default reducers;