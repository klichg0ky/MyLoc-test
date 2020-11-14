import React, {useState, useEffect} from 'react';
import {Image, Text, StyleSheet, View, Modal} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Header} from '../components/Header';
import {commonStyles} from '../styles/commonStyles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MapView, {Marker} from 'react-native-maps';
import {HeadingText} from '../components/HeadingText';
import {AppButton} from '../components/AppButton';
import {SCREEN_NAMES} from '../navigation/screenNames';
import {connect} from 'react-redux';
import {setTrackId} from '../store/actions';
const SAN_FRANCISCO_LOCATION = {
  latitude: 37.78825,
  longitude: -122.4324,
};
const ModalClose = ({onClose, onAccept}) => {
  return (
    <View style={styles.modalClose}>
      <Text style={styles.modalText}>Уверены, что хотите выйти?</Text>
      <View style={styles.modalButtons}>
        <View style={styles.modalButton}>
          <TouchableOpacity onPress={onAccept}>
            <Text
              style={[
                styles.modalButtonText,
                {
                  color: '#559D52',
                },
              ]}>
              Да
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.modalButton}>
          <TouchableOpacity onPress={onClose}>
            <Text
              style={[
                styles.modalButtonText,
                {
                  color: '#FF5A5A',
                },
              ]}>
              Нет
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const SelectScreen = (props) => {
  const [selectedLocation, setSelectedLocation] = useState(
    SAN_FRANCISCO_LOCATION,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const renderClose = () => {
    return (
      <TouchableOpacity
        style={[styles.closeButton, commonStyles.buttonWhite]}
        onPress={() => setModalVisible(true)}>
        <View style={[commonStyles.buttonShadow, styles.closeShadow]} />
        <Image source={require('../assets/images/close_icon.png')} />
      </TouchableOpacity>
    );
  };
  const onSelect = async () => {
    props.navigation.navigate(SCREEN_NAMES.MAP.SEND, selectedLocation);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <ModalClose
            onClose={() => setModalVisible(false)}
            onAccept={() => props.navigation.goBack()}
          />
        </View>
      </Modal>
      <Header
        style={props.navigation.goBack}
        transparent={true}
        backButtonVisible={false}
        renderRight={renderClose}
      />
      <HeadingText text="Выберите вашу" />
      <View style={styles.mapContainer}>
        <MapView
          initialRegion={{
            ...SAN_FRANCISCO_LOCATION,
            latitudeDelta: 0.002,
            longitudeDelta: 0.002,
          }}
          onPress={(event) => setSelectedLocation(event.nativeEvent.coordinate)}
          style={styles.map}>
          <Marker coordinate={selectedLocation}>
            <Image source={require('../assets/images/Maps_Icon.png')} />
          </Marker>
        </MapView>
      </View>
      <View style={styles.selectButton}>
        <AppButton text="Выбрать" onPress={onSelect} />
      </View>
    </SafeAreaView>
  );
};

const CLOSE_SIZE = 47;
const styles = StyleSheet.create({
  closeButton: {
    width: CLOSE_SIZE,
    height: CLOSE_SIZE,
    borderRadius: CLOSE_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECF0F3',
    position: 'relative',
  },
  closeShadow: {
    borderRadius: CLOSE_SIZE / 2,
  },
  modalContainer: {
    backgroundColor: 'rgba(46, 46, 46, 0.34)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalClose: {
    width: '90%',
    backgroundColor: 'white',
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 28,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 20,
    marginTop: 30,
    marginBottom: 60,
    fontWeight: '700',
    color: '#707070',
  },
  modalButtons: {
    flexDirection: 'row',
  },
  modalButton: {
    flex: 1,
    // height: 30,
  },
  modalButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mapContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  map: {
    height: 290,
    // width: 335,
  },
  selectButton: {
    position: 'absolute',
    paddingHorizontal: 20,
    bottom: 60,
    width: '100%',
  },
});

const mapStateToProps = (state) => ({
  trackId: state.trackId,
});

export default connect(mapStateToProps, {
  setTrackId,
})(SelectScreen);
