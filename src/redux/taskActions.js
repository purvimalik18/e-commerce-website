import { COROUSEL, TRENDINGCATEGORIES } from "./taskActionTypes";

export const requestCorousels = (data) => ({
  type: COROUSEL.LOAD_SUCCESS,
  corouselData: data,
  isError: false,
});

export const requestTrendingCategories = (data) => ({
  type: TRENDINGCATEGORIES.LOAD_SUCCESS,
  trendingCategories: data,
  isError: false,
});
