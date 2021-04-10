import React from 'react';
import {FlatList} from 'react-native';

import ProductItem from '../components/ProductItem';

import Header from '../components/Header';

const productList = require('../data/productListingData.json');

const ProductListingSreen = (params) => {
  return (
    <>
      <Header navigation={params.navigation} />
      <FlatList
        data={productList.productArr}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => <ProductItem productData={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </>
  );
};

export default ProductListingSreen;
