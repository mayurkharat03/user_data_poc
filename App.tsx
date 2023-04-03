/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import Home from './src/screen/home/Home';
import Header from './src/components/header/Header';

function App(): JSX.Element {
  const backgroundStyle = {
    backgroundColor: '#DADEDF',
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <Header />
      <Home />
    </SafeAreaView>
  );
}

export default App;
