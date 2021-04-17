import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images} from '../../images';
import {normalColors as colors} from '../../colors';
import {getBottomSpace, hp} from '../../shared/responsive-dimension';
import Dashboard from '../../dashboard/home';
import Plan from '../../dashboard/plans';

const {icons} = images;

const TabIcon = ({isFocused, icon}) => {
  return (
    <Image
      source={icon}
      resizeMode="contain"
      style={[
        {width: hp(25), height: hp(25), marginBottom: hp(2)},
        isFocused && {tintColor: colors.taelDark},
      ]}
    />
  );
};

const Tab = createBottomTabNavigator();

const DashboardBottomTab = ({route}) => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: colors.taelDark,
        inactiveTintColor: colors.grey400,
        labelStyle: {
          fontFamily: 'Gelion-Medium',
          fontSize: hp(12),
          lineHeight: hp(16),
          marginBottom: hp(6),
        },
        tabStyle: {
          height: hp(70),
          paddingVertical: hp(15),
        },
        style: {
          backgroundColor: colors.white,
          height: hp(76) + getBottomSpace(),
        },
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon icon={icons.home} isFocused={focused} />
          ),
        }}
        name="Dashboard"
        component={Dashboard}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon icon={icons.plan} isFocused={focused} />
          ),
        }}
        name="Plans"
        component={Plan}
      />
    </Tab.Navigator>
  );
};

export default DashboardBottomTab;
