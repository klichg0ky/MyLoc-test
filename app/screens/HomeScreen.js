import React, {useState, useRef} from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '../styles/commonStyles';
import {useFocusEffect} from '@react-navigation/native';
import {SCREEN_NAMES} from '../navigation/screenNames';
import {connect} from 'react-redux';
import {setTrackId} from '../store/actions';

const SCREEN_STATUS = {
  EMPTY: 'EMPTY',
  WITH_BUTTON: 'BUTTON',
};

const {height, width} = Dimensions.get('window');
const HomeScreen = (props) => {
  const buttonAnimation = useRef(new Animated.Value(0)).current;
  const [screenStatus, setScreenStatus] = useState(SCREEN_STATUS.EMPTY);

  const buttonFadeOut = () => {
    Animated.timing(buttonAnimation, {
      toValue: 0,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  const buttonFadeIn = () => {
    Animated.timing(buttonAnimation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };
  const firstPress = () => {
    setScreenStatus(SCREEN_STATUS.WITH_BUTTON);
    buttonFadeIn();
  };

  const onStart = async () => {
    const data = await startTrack();
    props.setTrackId(data.track_id);
    props.navigation.navigate(SCREEN_NAMES.MAP.SELECT);
  };
  return (
    <SafeAreaView style={commonStyles.container}>
      <>
        {screenStatus === SCREEN_STATUS.EMPTY && (
          <TouchableWithoutFeedback
            style={{
              height,
              zIndex: 200,
            }}
            onPress={firstPress}>
            <View
              style={{
                position: 'absolute',
                height,
                width: '100%',
                zIndex: 100,
              }}
            />
          </TouchableWithoutFeedback>
        )}
        <View style={styles.screenContainer}>
          <TouchableOpacity onPress={onStart}>
            <Animated.View
              style={{
                ...styles.button,
                ...commonStyles.buttonWhite,
                opacity: buttonAnimation,
              }}>
              <View style={[styles.buttonShadow, commonStyles.buttonShadow]} />
              <Text style={styles.buttonText}>Начать</Text>
            </Animated.View>
          </TouchableOpacity>
          {screenStatus === SCREEN_STATUS.EMPTY && (
            <Text style={styles.text}>Нажмите на экран</Text>
          )}
        </View>
      </>
    </SafeAreaView>
  );
};

const startTrack = async () => {
  const response = await fetch('http://test-spotapp.ru:8080/start_track', {
    method: 'post',
  });

  const json = await response.json();

  return json;
};
const styles = StyleSheet.create({
  pressContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'gold',
  },

  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    position: 'absolute',
    bottom: 56,
    width,
    textAlign: 'center',
    color: '#707070',
    fontSize: 20,
    fontWeight: '700',
  },
  button: {
    borderRadius: 16,
    width: 106,
    height: 106,
    backgroundColor: '#ECF0F3',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
  },
  buttonShadow: {},
  buttonText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#707070',
  },
});

const mapStateToProps = (state) => ({
  trackId: state.trackId,
});

export default connect(mapStateToProps, {
  setTrackId,
})(HomeScreen);
