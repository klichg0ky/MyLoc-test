/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {AppNavigator} from './app/navigation/AppNavigator';
import {Provider} from 'react-redux';
import store from './app/store';
const App = () => {
  return (
    <>
      <StatusBar hidden />
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </>
  );
};

export default App;
