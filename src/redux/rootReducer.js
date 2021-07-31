// types.js -> reducer.js -> rootReducer.js

import { combineReducers } from "redux";
import postReducer from "./post/reducer";

const rootReducer = combineReducers({
    post : postReducer
})

export default rootReducer;
