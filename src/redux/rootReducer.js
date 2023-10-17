import {combineReducers} from "redux";
import { reducer, trendingReducer } from "./taskReducer";

const rootReducer = combineReducers({
    task: reducer,
    trendingCategories: trendingReducer
});

export default rootReducer;