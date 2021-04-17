import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {images} from '../images';
import {normalColors as colors} from '../colors';
import {getBottomSpace, hp, wp} from '../shared/responsive-dimension';
import Dashboard from '../dashboard';

const {icons} = images;

const TabIcon = ({isFocused, icon}) => {
  return (
    <Image
      source={icon}
      resizeMode="contain"
      style={[
        {width: hp(30), height: hp(30), marginBottom: hp(2)},
        isFocused && {tintColor: colors.green500},
      ]}
    />
  );
};

const EmptyScreen = () => {
  return null;
};

const Tab = createBottomTabNavigator();

const DashboardBottomTab = ({route}) => {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      tabBarOptions={{
        activeTintColor: colors.green500,
        inactiveTintColor: colors.grey400,
        labelStyle: {
          fontFamily: 'Roboto-Medium',
          fontSize: hp(12),
          lineHeight: hp(16),
          marginBottom: hp(6),
        },
        tabStyle: {
          height: hp(79),
          paddingVertical: hp(15),
        },
        style: {
          backgroundColor: colors.white,
          height: hp(79) + getBottomSpace(),
          borderRadius: hp(25),
          width: wp(360),
          left: hp(7),
          bottom: hp(10),
        },
        showLabel: false,
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
            <TabIcon icon={icons.like} isFocused={focused} />
          ),
        }}
        name="Like"
        component={EmptyScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon icon={icons.notification} isFocused={focused} />
          ),
        }}
        name="Notifications"
        component={EmptyScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon icon={icons.profile} isFocused={focused} />
          ),
        }}
        name="Profile"
        component={EmptyScreen}
      />
    </Tab.Navigator>
  );
};

export default DashboardBottomTab;
