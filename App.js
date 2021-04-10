/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';

import AppNavigator from './src/navigators/AppNavigator';
import getStore from './src/redux/store';
import {SafeAreaView} from 'react-native';

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  return (
    <>
      <Provider store={getStore()}>
        <SafeAreaView style={{flex: 1}}>
          <AppContainer />
        </SafeAreaView>
      </Provider>
    </>
  );
};

export default App;
