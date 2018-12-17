import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import userReducer from "./userReducer";

export default combineReducers({
  user: userReducer,
  errors: errorReducer
});
