import { combineReducers } from "redux";
import gamePlayReducer from "./gamePlayReducer";
const rootReducer = combineReducers({
  //main store
  gamePlayReducer,
});
export default rootReducer;
