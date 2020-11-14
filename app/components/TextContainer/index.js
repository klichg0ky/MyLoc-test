import React from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';

const CONTAINER_IMAGE = require('../../assets/images/container.png');
export const TextContainer = ({text}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={{
          borderRadius: 30,
        }}
        style={styles.image}
        source={CONTAINER_IMAGE}>
        <Text style={styles.text}>{text}</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    borderRadius: 30,
    overflow: 'hidden',
    // width: 200,
    height: 53,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  image: {
    borderRadius: 30,
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
    alignItems: 'center',
    // height: 70,
  },
  text: {
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
    color: '#707070',
  },
  containerImage: {
    width: '100%',
    height: 50,

    top: 0,
    left: 0,
  },
});
