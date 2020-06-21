import { combineReducers } from 'redux';
import changeTabReducer from './changeTabReducer';

const rootReducer = combineReducers({
    changeTab: changeTabReducer,
});

export default rootReducer;
