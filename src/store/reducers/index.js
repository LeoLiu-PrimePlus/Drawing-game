import { combineReducers } from "redux";
import drawingLists from "./drawingLists";
import notifyMsg from "./notifyMsg";
import step from "./step";

export default combineReducers({
  drawingLists,
  notifyMsg,
  step
});
