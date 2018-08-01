import * as types from './actionTypes';

export const setName = (name) => {
  return dispatch => {
    dispatch({ type: types.SET_NAME, name });
  };
};
