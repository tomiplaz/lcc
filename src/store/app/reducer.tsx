import { IAppState } from '.';
import {
  AppAction,
  FETCH_PRODUCTS_START,
  FETCH_PRODUCTS_SUCCESS,
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART,
} from './actions';
import { ICartItem } from 'src/types/Cart';

const initialState: IAppState = {
  isFetchingProducts: false,
  cart: {
    items: [],
    count: 0,
    value: 0,
  },
};

export function appReducer(state: IAppState = initialState, action: AppAction): IAppState {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return { ...state, isFetchingProducts: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, isFetchingProducts: false };
    case ADD_PRODUCT_TO_CART: {
      const items = [ ...state.cart.items ];
      const cartItemIndex = getCartItemIndex(items, action.cartItem.productId);

      if (cartItemIndex !== -1) {
        const cartItem = items[cartItemIndex];

        cartItem.count += action.cartItem.count;
        items.splice(cartItemIndex, 1, cartItem);
      } else {
        items.push(action.cartItem);
      }

      return {
        ...state,
        cart: {
          items,
          count: getCartCount(items),
          value: getCartValue(items),
        }
      };
    }
    case REMOVE_PRODUCT_FROM_CART: {
      const items = [ ...state.cart.items ];
      const cartItemIndex = getCartItemIndex(items, action.productId);

      if (cartItemIndex !== -1) {
        const cartItem = items[cartItemIndex];

        cartItem.count--;

        if (cartItem.count > 0) {
          items.splice(cartItemIndex, 1, cartItem);
        } else {
          items.splice(cartItemIndex, 1);
        }
      }

      return {
        ...state,
        cart: {
          items,
          count: getCartCount(items),
          value: getCartValue(items),
        }
      };
    }
    default:
      return { ...state };
  }
};

function getCartItemIndex(items: ICartItem[], productId: number) {
  return items.findIndex(cartItem => cartItem.productId === productId);
}

function getCartCount(items: ICartItem[]) {
  return items.reduce((sum, cartItem) => sum + cartItem.count, 0);
}

function getCartValue(items: ICartItem[]) {
  return items.reduce((sum, cartItem) => sum + cartItem.count * 4.2, 0);
}
