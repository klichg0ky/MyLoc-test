import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {BackButton} from './BackButton';
import {Logo} from './Logo';

export const Header = ({
  backButtonVisible = true,
  goBack = () => null,
  renderRight = () => null,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {backButtonVisible && <BackButton goBack={goBack} />}
      </View>
      <View style={styles.center}>
        <Logo />
      </View>
      <View style={styles.right}>{renderRight()}</View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    // paddingHorizontal: 30,
    marginVertical: 30,
  },
  left: {
    flex: 2,
    alignItems: 'flex-end',
  },
  right: {
    flex: 2,
    alignItems: 'flex-start',
  },
  center: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
