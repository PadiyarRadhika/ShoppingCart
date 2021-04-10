import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import {connect} from 'react-redux';

import ProductQuantity from '../components/ProductQuantity';

const ProductSummaryScreen = ({cartData}) => {
  const renderCartItems = (cartData) => {
    return (
      !!cartData &&
      cartData.map((item) => {
        return (
          <View
            key={item.productId}
            style={{
              backgroundColor: 'white',
              margin: 10,
              padding: 10,
              borderRadius: 8,
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#007185',
                fontSize: 12,
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              {item.name}
            </Text>

            <View
              style={{
                paddingVertical: 20,
                flexDirection: 'row',
                flexGrow: 0,
                paddingHorizontal: 5,
              }}>
              <Image
                source={{uri: item.image}}
                style={{width: 150, height: 150}}
                resizeMode="contain"
              />

              <View style={{paddingHorizontal: 20}}>
                <Text
                  style={{
                    color: 'black',
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginBottom: 10,
                  }}>
                  {item.currency + ' ' + item.price}
                </Text>
                <ProductQuantity product={item} />
              </View>
            </View>
          </View>
        );
      })
    );
  };

  const renderEmptyCart = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>
          Your cart is empty. Please add items to your cart
        </Text>
      </View>
    );
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{flex: 1}}
      contentContainerStyle={{
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}>
      {renderCartItems(cartData)}
      {cartData.length == 0 ? renderEmptyCart() : null}
    </ScrollView>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductSummaryScreen);
