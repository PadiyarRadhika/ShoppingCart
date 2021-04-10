import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';

import ProductListingSreen from '../screens/ProductListingScreen';
import ProductSummaryScreen from '../screens/ProductSummaryScreen';
import Header from '../components/Header';

const AppNavigator = createStackNavigator({
  ProductListing: {
    screen: ProductListingSreen,
    navigationOptions: {header: null},
  },
  ProductSummary: {
    screen: ProductSummaryScreen,
    navigationOptions: {
      headerBackTitle: ' ',
      headerTintColor: 'black',
      headerTitle: null,
    },
  },
});

export default createAppContainer(AppNavigator);
