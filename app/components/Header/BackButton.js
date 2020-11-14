import React from 'react';
import {TouchableOpacity, Image, Text, StyleSheet} from 'react-native';
import {commonStyles} from '../../styles/commonStyles';

export const BackButton = (props) => {
  return (
    <TouchableOpacity onPress={props?.goBack} style={[styles.button]}>
      <Image source={require('../../assets/images/back_button.png')} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({});
