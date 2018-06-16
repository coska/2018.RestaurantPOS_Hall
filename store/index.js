import { combineReducers } from 'redux';
import home from './home/reducer';
import login from './login/reducer';

export default combineReducers({
  home,
  login
});
