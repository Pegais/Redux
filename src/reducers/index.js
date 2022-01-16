// reducer --- how to do

// here we will combinwe all the reducer functions
// using combineReducers
// and keep it in rootReducer;

import upDown from "./upDown";
import changeName from "./changeName";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    upDown,
    changeName
})

export default rootReducer;