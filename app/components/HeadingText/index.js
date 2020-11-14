import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const HeadingText = ({text = ''}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  text: {
    color: '#707070',
    fontSize: 30,
    fontWeight: '700',
  },
});
