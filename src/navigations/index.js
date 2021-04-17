import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import DashboardBottomTab from './bottom-tabs';
const HomeStack = createStackNavigator();

const AppNav = () => {
  return (
    <HomeStack.Navigator initialRouteName="Dashboard" headerMode="none">
      <HomeStack.Screen name="Dashboard" component={DashboardBottomTab} />
    </HomeStack.Navigator>
  );
};

export default AppNav;
