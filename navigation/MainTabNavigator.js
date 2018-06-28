import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import TableScreen from '../screens/TableScreen';

const HomeStack = createStackNavigator({
  Login: LoginScreen,
  Table: TableScreen,
  Home: HomeScreen
}, {
  navigationOptions: {
    header: null
  }
});

export default HomeStack;
