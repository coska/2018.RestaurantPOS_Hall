
import * as types from './actionTypes';

const initialState = {
  tableNumber: ''
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_TABLE: {
      return Object.assign({}, state, {
        tableNumber: action.tableNumber
      });
    }
    default:
      return state;
  }
}
