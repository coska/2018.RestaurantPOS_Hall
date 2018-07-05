import * as types from './actionTypes';
import HallService from '../../services/HallService';

export const getCategories = () => {
  return async(dispatch, getState) => {
    try {
      const categories = await HallService.getCategories();
      dispatch({ type: types.GET_CATEGORIES_SUCCESS, categories });
      return categories;
    } catch (response) {
      dispatch({ type: types.GET_CATEGORIES_FAIL, ...response });
      throw new Error(response);
    }
  };
}

export const getProducts = () => {
  return async(dispatch, getState) => {
    try {
      const products = await HallService.getProducts();
      dispatch({ type: types.GET_PRODUCTS_SUCCESS, products });
      return products;
    } catch (response) {
      dispatch({ type: types.GET_PRODUCTS_FAIL, ...response });
      throw new Error(response);
    }
  };
}

export const getMenu = () => {
  return async(dispatch, getState) => {
    try {
      const menu = await HallService.getMenu();
      dispatch({ type: types.GET_MENU_SUCCESS, menu });
      return menu;
    } catch (response) {
      dispatch({ type: types.GET_MENU_FAIL, ...response });
      throw new Error(response);
    }
  };
}