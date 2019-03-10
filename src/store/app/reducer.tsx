import { IAppState } from '.';
import {
  AppAction,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
} from './actions';
import { ICartProduct } from 'src/types/CartProduct';

const initialState: IAppState = {
  isFetchingProducts: false,
  cart: [],
};

export function appReducer(state: IAppState = initialState, action: AppAction): IAppState {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return { ...state, isFetchingProducts: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, isFetchingProducts: false };
    case ADD_PRODUCT_TO_CART: {
      const cart = [ ...state.cart ];
      const cartProductIndex = getCartProductIndex(cart, action.cartProduct.id);

      if (cartProductIndex !== -1) {
        const cartProduct = cart[cartProductIndex];

        cartProduct.count += action.cartProduct.count;
        cart.splice(cartProductIndex, 1, cartProduct);
      } else {
        cart.push(action.cartProduct);
      }

      return { ...state, cart };
    }
    case REMOVE_PRODUCT_FROM_CART: {
      const cart = [ ...state.cart ];
      const cartProductIndex = getCartProductIndex(cart, action.id);

      if (cartProductIndex !== -1) {
        const cartProduct = cart[cartProductIndex];

        cartProduct.count--;

        if (cartProduct.count > 0) {
          cart.splice(cartProductIndex, 1, cartProduct);
        } else {
          cart.splice(cartProductIndex, 1);
        }
      }

      return { ...state, cart };
    }
    default:
      return { ...state };
  }
};

function getCartProductIndex(cart: ICartProduct[], productId: number) {
  return cart.findIndex(cartProduct => cartProduct.id === productId);
}
