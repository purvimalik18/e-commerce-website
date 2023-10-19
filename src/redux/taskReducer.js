import { COROUSEL, PRODUCTS, TRENDINGCATEGORIES } from "./taskActionTypes";

const initalState = {
  corouselData: [],
  isLoading: false,
  isError: false,
};

const initialTrendingState = {
  trendingStateData: [],
  isLoading: false,
  isError: false,
};

const initialProductState = {
  productsData: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initalState, action) => {
  switch (action.type) {
    case COROUSEL.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case COROUSEL.LOAD_SUCCESS:
      return {
        ...state,
        corouselData: action.corouselData,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const trendingReducer = (state = initialTrendingState, action) => {
  switch (action.type) {
    case TRENDINGCATEGORIES.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case TRENDINGCATEGORIES.LOAD_SUCCESS:
      return {
        ...state,
        trendingStateData: action.trendingCategories,
        isLoading: false,
      };
    default:
      return state;
  }
};

export const productsReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case PRODUCTS.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case PRODUCTS.LOAD_SUCCESS:
      return {
        ...state,
        productsData: action.productsData,
        isLoading: false,
      };
    default:
      return state;
  }
};
