import * as types from './actionTypes';

export const setTable = (tableNumber) => {
  return dispatch => {
    dispatch({ type: types.SET_TABLE, tableNumber });
  };
};
