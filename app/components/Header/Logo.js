import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {commonStyles} from '../../styles/commonStyles';

export const Logo = () => {
  return (
    <View style={[styles.logoContainer, commonStyles.buttonWhite]}>
      <View style={[commonStyles.buttonShadow, styles.logoShadow]} />
      <Image source={require('../../assets/images/location_Icon.png')} />
      <Text style={styles.logoText}>MyLoc</Text>
    </View>
  );
};

const LOGO_SIZE = 108;
const styles = StyleSheet.create({
  logoContainer: {
    backgroundColor: '#ECF0F3',
    alignItems: 'center',
    justifyContent: 'center',
    width: LOGO_SIZE,
    height: LOGO_SIZE,
    borderRadius: LOGO_SIZE / 2,
    position: 'relative',
  },
  logoShadow: {
    borderRadius: LOGO_SIZE / 2,
  },
  logoText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#797979',
    marginTop: 5,
  },
});
