import { combineReducers } from "redux";
import trainsReducer from "./trainsReducer";

export default combineReducers({
  data: trainsReducer
});
