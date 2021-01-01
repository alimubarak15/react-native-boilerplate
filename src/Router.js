import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screen/Home';
import Profile from './screen/Profile';
import Service from './screen/Service';
import Setting from './screen/Setting';
import Icon from 'react-native-vector-icons/FontAwesome';

const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => <Icon name="home" size={30} />,
        }}
      />
      <Tab.Screen
        name="Sevice"
        component={Service}
        options={{
          tabBarIcon: () => <Icon name="headphones" size={30} />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: () => <Icon name="cogs" size={30} />,
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={TabNavigation} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
