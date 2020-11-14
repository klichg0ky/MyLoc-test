import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {commonStyles} from '../../styles/commonStyles';

export const AppButton = ({onPress = () => null, text = ''}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, commonStyles.buttonWhite]}>
      <View
        style={[
          commonStyles.buttonShadow,
          {
            borderRadius: 24,
          },
        ]}
      />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    borderRadius: 24,
    width: '100%',
    backgroundColor: '#ECF0F3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: '#707070',
  },
});
