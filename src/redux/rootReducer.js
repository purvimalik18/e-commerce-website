import {combineReducers} from "redux";
import { productsReducer, reducer, trendingReducer } from "./taskReducer";

const rootReducer = combineReducers({
    task: reducer,
    trendingCategories: trendingReducer,
    products: productsReducer
});

export default rootReducer;