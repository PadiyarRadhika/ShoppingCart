import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {connect} from 'react-redux';

const Header = ({cartCount, navigation}) => {
  return (
    <View style={styles.headerContainerStyle}>
      <Text style={styles.headerTitleStyle}>Let's Shop!!!</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductSummary');
        }}
        style={styles.cartWrapperStyle}>
        <Image
          source={require('../assets/cartIcon.jpeg')}
          style={styles.cartIconStyle}
        />
        <Text style={styles.cartCountStyle}>{cartCount}</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    cartCount: state.cartReducer.cartCount,
  };
};

export default connect(mapStateToProps, null)(Header);

const styles = StyleSheet.create({
  cartCountStyle: {fontSize: 20, fontWeight: 'bold', color: '#f08804'},
  cartIconStyle: {width: 35, height: 35},
  cartWrapperStyle: {
    paddingHorizontal: 5,
    position: 'absolute',
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitleStyle: {fontSize: 20, fontWeight: 'bold', color: '#f08804'},
  headerContainerStyle: {
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 14,
    flexDirection: 'row',
    marginBottom: 2,
  },
});
