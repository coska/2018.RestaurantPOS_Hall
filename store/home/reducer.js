
import * as types from './actionTypes';

const initialState = {
  products: [],
  categories: []
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_CATEGORIES_SUCCESS: {
      return Object.assign({}, state, {
        categories: action.categories
      });
    }
    case types.GET_PRODUCTS_SUCCESS: {
      return Object.assign({}, state, {
        products: action.products
      });
    }
    default:
      return state;
  }
}
