import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN_NAMES} from './screenNames';
import HomeScreen from '../screens/HomeScreen';
import SelectScreen from '../screens/SelectScreen';
import SendScreen from '../screens/SendScreen';
import ListScreen from '../screens/ListScreen';

const Stack = createStackNavigator();
const HEADER_NONE = {
  headerShown: false,
};
export const AppNavigator = () => (
  <Stack.Navigator screenOptions={HEADER_NONE}>
    <Stack.Screen name={SCREEN_NAMES.MAP.MAIN} component={HomeScreen} />
    <Stack.Screen name={SCREEN_NAMES.MAP.SELECT} component={SelectScreen} />
    <Stack.Screen name={SCREEN_NAMES.MAP.SEND} component={SendScreen} />
    <Stack.Screen name={SCREEN_NAMES.MAP.LIST} component={ListScreen} />
  </Stack.Navigator>
);
