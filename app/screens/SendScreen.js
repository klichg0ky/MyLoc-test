import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from '../components/Header';
import {HeadingText} from '../components/HeadingText';
import {TextContainer} from '../components/TextContainer';
import {AppButton} from '../components/AppButton';
import {commonStyles} from '../styles/commonStyles';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {SCREEN_NAMES} from '../navigation/screenNames';

const SendScreen = (props) => {
  /**
   * send track
   * route.params {
   *  latitude: number;
   *  longitude: number;
   * }
   */
  const onSend = async () => {
    await sendTrack({
      ...props.route.params,
      track_id: props.trackId,
    });

    props.navigation.navigate(SCREEN_NAMES.MAP.LIST);
  };
  return (
    <SafeAreaView style={commonStyles.container}>
      <Header goBack={props.navigation.goBack} />
      <HeadingText text="Отправьте выбранную" />
      <View style={styles.coordinates}>
        <View style={styles.coordinate}>
          <View style={styles.itemText}>
            <Text style={styles.text}>Широта</Text>
          </View>
          <View style={styles.item}>
            <TextContainer text={props.route.params.latitude} />
          </View>
        </View>
        <View style={styles.coordinate}>
          <View style={styles.itemText}>
            <Text style={styles.text}>Долгота</Text>
          </View>
          <View style={styles.item}>
            <TextContainer text={props.route.params.longitude} />
          </View>
        </View>
      </View>

      <View style={styles.button}>
        <AppButton text="Отправить" onPress={onSend} />
      </View>
    </SafeAreaView>
  );
};

const sendTrack = async (data) => {
  console.log(data);

  const response = await fetch('http://test-spotapp.ru:8080/save_track_point', {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const json = await response.text();
  console.log(json);
};

const styles = StyleSheet.create({
  container: {},
  coordinates: {
    marginTop: 80,
  },
  coordinate: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  item: {
    flex: 3,
    // alignItems: 'flex-end',
  },
  itemText: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: '#707070',
  },
  button: {
    position: 'absolute',
    bottom: 60,
    paddingHorizontal: 20,
    width: '100%',
  },
});

const mapStateToProps = (state) => ({
  trackId: state.trackId,
});
export default connect(mapStateToProps)(SendScreen);
