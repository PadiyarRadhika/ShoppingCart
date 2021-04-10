import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

import {connect} from 'react-redux';

import {onAddToCart} from '../redux/actions/CartDataActions';
import Rating from './Rating';

const ProductItem = ({productData, cartData, addProductToCart}) => {
  return (
    <View style={styles.itemContainerstyle}>
      <Image
        style={styles.itemImageStyle}
        source={{
          uri: productData.image,
        }}
        resizeMode="contain"
      />
      <View style={{flex: 1}}>
        <Text style={styles.itemNameStyle}>{productData.name}</Text>
        {!!productData.description && (
          <Text style={styles.itemDescriptionStyle}>
            {productData.description}
          </Text>
        )}
        <Rating ratingCount={productData.ratings} />
        <Text style={styles.itemPriceStyle}>
          {productData.currency + ' ' + productData.price}
        </Text>
        <TouchableOpacity
          style={styles.addToCartButton}
          onPress={() => {
            addProductToCart(cartData, productData);
          }}>
          <Text style={styles.addToCartTextStyle}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addProductToCart: (cartData, product) =>
    dispatch(onAddToCart(cartData, product)),
});
const mapStateToProps = (state) => {
  return {
    cartData: state.cartReducer.cartData,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);

const styles = StyleSheet.create({
  addToCartTextStyle: {color: 'black', fontSize: 14, fontWeight: '500'},
  addToCartButton: {
    backgroundColor: '#e7e9ec',
    borderColor: '#8D9096',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    padding: 10,
    borderRadius: 4,
    borderWidth: 1,
  },
  itemPriceStyle: {color: '#B12704', fontSize: 14, fontWeight: '500'},
  itemDescriptionStyle: {color: 'black', fontSize: 14, fontWeight: '300'},
  itemNameStyle: {color: 'black', fontSize: 14, fontWeight: 'bold'},
  itemImageStyle: {height: 150, width: 150},
  itemContainerstyle: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
