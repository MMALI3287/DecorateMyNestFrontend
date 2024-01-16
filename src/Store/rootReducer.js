import userReducer from "./Slices/userSlice";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
