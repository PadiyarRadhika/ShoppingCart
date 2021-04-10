import {actionConstants} from '../ActionConstants';

export function CartReducer(state = {cartData: [], cartCount: 0}, action) {
  switch (action.type) {
    case actionConstants.addToCart: {
      return {
        ...state,
        cartData: action.cartData,
        cartCount: state.cartCount + 1,
      };
    }
    case actionConstants.onRemoveFromCart: {
      return {
        ...state,
        cartData: action.cartData,
        cartCount: state.cartCount - 1,
      };
    }
    default:
      return state;
  }
}
