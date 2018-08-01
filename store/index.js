import { combineReducers } from 'redux';
import home from './home/reducer';
import login from './login/reducer';
import table from './table/reducer';

export default combineReducers({
  home,
  login,
  table
});
