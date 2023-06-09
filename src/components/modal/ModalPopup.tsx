import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

export default function ModalPopup(props: any) {
  const cardData = props.cardData;
  const modalVisible = props.modalVisible;

  return (
    <View style={styles.centeredView}>
      <Modal backdropOpacity={0.8} isVisible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Image
              source={{uri: cardData.cardData.picture?.medium}}
              style={styles.fullImageViewContainer}
            />
            <Text style={styles.nameContainer}>
              Name: {cardData.cardData.name.title}{' '}
              {cardData.cardData.name.first} {cardData.cardData.name.last}
            </Text>
            <Text style={styles.textContainer}>
              UUID: {cardData.cardData.login.uuid}
            </Text>
            <Text style={styles.textContainer}>
              Gender: {cardData.cardData.gender}
            </Text>
            <Text style={styles.textContainer}>
              Age: {cardData.cardData.dob.age}
            </Text>
            <Text style={styles.textContainer}>
              Phone No: {cardData.cardData.phone}
            </Text>
            <Text style={styles.textContainer}>
              Email: {cardData.cardData.email}
            </Text>

            <Text style={styles.textContainer}>
              Address: {cardData.cardData.location.city},{' '}
              {cardData.cardData.location.state},{' '}
              {cardData.cardData.location.country},{' '}
              {cardData.cardData.location.postcode}
            </Text>
            <Pressable
              style={styles.pressable}
              onPress={() => props.handleModalVisible()}>
              <Text style={styles.textStyle}>x</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
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
