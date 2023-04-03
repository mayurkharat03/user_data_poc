import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.subContainer}>User List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1D59EB',
    height: 70,
  },
  subContainer: {
    display: 'flex',
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    padding: 20,
  },
});
