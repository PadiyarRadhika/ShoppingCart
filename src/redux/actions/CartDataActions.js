import {actionConstants} from '../ActionConstants';

export function onAddToCart(cartData, product) {
  let cloneCartData = cartData ? JSON.parse(JSON.stringify(cartData)) : [];
  let productIndex = cloneCartData.findIndex(
    (item) => item.productId === product.productId,
  );
  if (productIndex !== -1) {
    cloneCartData[productIndex] = {
      ...cloneCartData[productIndex],
      quantity: cloneCartData[productIndex].quantity + 1,
    };
  } else cloneCartData.push({...product, quantity: 1});
  return {
    type: actionConstants.addToCart,
    cartData: cloneCartData,
  };
}

export function onRemoveFromCart(cartData, product) {
  let cloneCartData = cartData ? JSON.parse(JSON.stringify(cartData)) : [];
  let itemIndex = cloneCartData.findIndex(
    (item) => item.productId === product.productId,
  );

  if (cloneCartData[itemIndex].quantity == 1) {
    cloneCartData.splice(itemIndex, 1);
  } else {
    cloneCartData[itemIndex] = {
      ...cloneCartData[itemIndex],
      quantity: cloneCartData[itemIndex].quantity - 1,
    };
  }

  return {
    type: actionConstants.onRemoveFromCart,
    cartData: cloneCartData,
  };
}
