import React from 'react';
import {StyleSheet, Platform} from 'react-native';

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F3',
  },
  buttonShadow: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 16,
    backgroundColor: '#ECF0F3',

    ...Platform.select({
      ios: {
        shadowColor: '#97A7C3',
        shadowOpacity: 0.5,
        shadowOffset: {
          width: 10,
          height: 10,
        },
        shadowRadius: 20,
      },
    }),
  },
  buttonWhite: {
    // backgroundColor: '#ECF0F3',

    ...Platform.select({
      ios: {
        shadowColor: '#fff',
        shadowOpacity: 1,
        shadowOffset: {
          width: -10,
          height: -10,
        },
        shadowRadius: 20,
      },
    }),
  },
});
