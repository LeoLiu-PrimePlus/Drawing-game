import { combineReducers } from 'redux';
import drawingLists from './drawingLists';
import notifyMsg from './notifyMsg';

export default combineReducers({
    drawingLists,
    notifyMsg
});