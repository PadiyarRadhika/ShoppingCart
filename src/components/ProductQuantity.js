import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {connect} from 'react-redux';

import {onAddToCart, onRemoveFromCart} from '../redux/actions/CartDataActions';

const ProductQuantity = ({
  product,
  cartData,
  addProductToCart,
  deleteProductFromCart,
}) => {
  return (
    <View style={styles.qtyContainerStyle}>
      <TouchableOpacity
        onPress={() => {
          deleteProductFromCart(cartData, product);
        }}
        style={styles.minusContainer}>
        <Text style={{fontSize: 14}}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityTextStyle}>{product.quantity}</Text>
      <TouchableOpacity
        onPress={() => {
          addProductToCart(cartData, product);
        }}
        style={styles.plusContainerStyle}>
        <Text style={{fontSize: 14}}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (cartData, product) =>
    dispatch(onAddToCart(cartData, product)),
  deleteProductFromCart: (cartData, product) =>
    dispatch(onRemoveFromCart(cartData, product)),
});

const mapStateToProps = (state) => {
  return {
    cartData: state.cartReducer.cartData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductQuantity);

const styles = StyleSheet.create({
  plusContainerStyle: {
    borderStartColor: 'grey',
    borderStartWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  quantityTextStyle: {color: 'black', fontSize: 16, fontWeight: '500'},
  minusContainer: {
    borderEndColor: 'grey',
    borderEndWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  qtyContainerStyle: {
    flexDirection: 'row',
    backgroundColor: '#D5D9D9',
    borderRadius: 8,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 14,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
