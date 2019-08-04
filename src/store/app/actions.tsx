import { ThunkAction } from 'redux-thunk';
import { IStoreState } from '..';
import { IProduct } from 'src/types/Product';
import { ICartItem } from 'src/types/Cart';

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export type FETCH_PRODUCTS_START = typeof FETCH_PRODUCTS_START;

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export type FETCH_PRODUCTS_SUCCESS = typeof FETCH_PRODUCTS_SUCCESS;

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export type ADD_PRODUCT_TO_CART = typeof ADD_PRODUCT_TO_CART;

export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export type REMOVE_PRODUCT_FROM_CART = typeof REMOVE_PRODUCT_FROM_CART;

export const REDUCE_CART = 'REDUCE_CART';
export type REDUCE_CART = typeof REDUCE_CART;

export interface IFetchProductsStart {
  type: FETCH_PRODUCTS_START;
};

export interface IFetchProductsSuccess {
  type: FETCH_PRODUCTS_SUCCESS;
  products: IProduct[];
};

export interface IAddProductToCart {
  type: ADD_PRODUCT_TO_CART;
  cartItem: ICartItem;
};

export interface IRemoveProductFromCart {
  type: REMOVE_PRODUCT_FROM_CART;
  productId: number;
};

export interface IReduceCart {
  type: REDUCE_CART;
  products: IProduct[];
}

export type AppAction = IFetchProductsStart | IFetchProductsSuccess | IAddProductToCart | IRemoveProductFromCart | IReduceCart;

export const fetchProductsStart = (): IFetchProductsStart => ({
  type: FETCH_PRODUCTS_START,
});

export const fetchProductsSuccess = (products: IProduct[]): IFetchProductsSuccess => ({
  type: FETCH_PRODUCTS_SUCCESS,
  products,
});

export const addProductToCart = (cartItem: ICartItem): IAddProductToCart => ({
  type: ADD_PRODUCT_TO_CART,
  cartItem
});

export const removeProductFromCart = (productId: number): IRemoveProductFromCart => ({
  type: REMOVE_PRODUCT_FROM_CART,
  productId
});

export const reduceCart = (products: IProduct[]): IReduceCart => ({
  type: REDUCE_CART,
  products
})

export const reduceCartThunk = (): ThunkAction<void, IStoreState, null, IReduceCart> => (dispatch, getState)  => {
  const products = getState().domain.products;

  dispatch(reduceCart(products));
}
