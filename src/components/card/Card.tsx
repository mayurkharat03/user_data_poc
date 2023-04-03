import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import ModalPopup from '../modal/ModalPopup';

export default function Card(cardData: any) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => setModalVisible(true)}
      style={styles.cardContainer}>
      {modalVisible && (
        <ModalPopup
          cardData={cardData}
          modalVisible={modalVisible}
          handleModalVisible={() => setModalVisible(!modalVisible)}
        />
      )}
      <View style={styles.subContainer}>
        <Image
          source={{uri: cardData.cardData.picture?.medium}}
          style={styles.imageViewContainer}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.nameContainer}>
            {cardData.cardData.name.title} {cardData.cardData.name.first}{' '}
            {cardData.cardData.name.last}
          </Text>
          <Text style={styles.uuidContainer}>
            {cardData.cardData.login.uuid}
          </Text>
          <Text style={styles.textContainer}>{cardData.cardData.phone}</Text>
          <Text style={styles.textContainer}>{cardData.cardData.email}</Text>
          <Text style={styles.textContainer}>
            {cardData.cardData.location.city}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  cardContainer: {
    margin: 5,
    padding: 5,
    border: 1,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  imageViewContainer: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: 'gray',
  },
  fullImageViewContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    overflow: 'hidden',
    borderRadius: 15,
  },
  uuidContainer: {
    fontSize: 11,
    paddingHorizontal: 8,
  },

  nameContainer: {
    color: 'black',
    fontSize: 16,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  textContainer: {
    paddingHorizontal: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    marginHorizontal: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  pressable: {
    position: 'absolute',
    right: 30,
    top: 20,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 30,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
