import React, {useState, useEffect} from 'react';

import {View, Text, StyleSheet, ActivityIndicator} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {commonStyles} from '../styles/commonStyles';
import {Header} from '../components/Header';
import {connect} from 'react-redux';
import {HeadingText} from '../components/HeadingText';
import {TextContainer} from '../components/TextContainer';
import {AppButton} from '../components/AppButton';

const ListScreen = (props) => {
  const [loading, setLoading] = useState(true);
  const [tracks, setTracks] = useState([]);
  const [selectedTrack, setSelectedTrack] = useState({
    latitude: 0,
    longitude: 0,
    order_id: 0,
  });

  useEffect(() => {
    getTrackList(props.trackId).then((list) => {
      setTracks(list);
      setSelectedTrack(list[0]);
      setLoading(false);
    });
  }, []);
  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <ActivityIndicator size="large" color="#707070" />
      </View>
    );
  }
  return (
    <SafeAreaView style={commonStyles.container}>
      <Header goBack={props.navigation.goBack} />
      <HeadingText text="Проверьте" />
      <Text style={styles.text}>Точка {selectedTrack.order_id + 1}</Text>
      <View style={styles.info}>
        <View style={styles.item}>
          <TextContainer text={selectedTrack.latitude} />
          <Text style={styles.itemText}>Широта</Text>
        </View>
        <View style={styles.item}>
          <TextContainer text={selectedTrack.latitude} />
          <Text style={styles.itemText}>Долгота</Text>
        </View>
      </View>
      <Text style={styles.text}>Выберите добавленную точку</Text>
      <View style={styles.list}>
        {tracks.map((item) => {
          return (
            <View key={item.order_id} style={styles.listItem}>
              <AppButton
                onPress={() => setSelectedTrack(item)}
                text={`Точка ${item.order_id + 1}`}
              />
            </View>
          );
        })}
      </View>

      <View style={styles.button}>
        <AppButton text="Добавить еще" onPress={props.navigation.goBack} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: '700',
    paddingHorizontal: 20,
    color: '#707070',
    marginTop: 20,
  },
  info: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
  },
  itemText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '700',
    color: '#707070',
  },

  list: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginTop: 20,
  },
  listItem: {
    flexBasis: '50%',
    padding: 20,
  },
  button: {
    bottom: 60,
    position: 'absolute',
    width: '100%',
    paddingHorizontal: 20,
  },
});

const getTrackList = async (trackId) => {
  const response = await fetch(
    `http://test-spotapp.ru:8080/get_track/${trackId}`,
  );
  const json = await response.json();
  return json;
};

const mapStateToProps = (state) => ({
  trackId: state.trackId,
});
export default connect(mapStateToProps)(ListScreen);
