import { IProduct } from 'src/types/Product';
import { ICartProduct } from 'src/types/CartProduct';

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export type FETCH_PRODUCTS_START = typeof FETCH_PRODUCTS_START;

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export type FETCH_PRODUCTS_SUCCESS = typeof FETCH_PRODUCTS_SUCCESS;

export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export type ADD_PRODUCT_TO_CART = typeof ADD_PRODUCT_TO_CART;

export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
export type REMOVE_PRODUCT_FROM_CART = typeof REMOVE_PRODUCT_FROM_CART;

export interface IFetchProductsStart {
  type: FETCH_PRODUCTS_START;
};

export interface IFetchProductsSuccess {
  type: FETCH_PRODUCTS_SUCCESS;
  products: IProduct[];
};

export interface IAddProductToCart {
  type: ADD_PRODUCT_TO_CART;
  cartProduct: ICartProduct;
};

export interface IRemoveProductFromCart {
  type: REMOVE_PRODUCT_FROM_CART;
  id: number;
};

export type AppAction = IFetchProductsStart | IFetchProductsSuccess | IAddProductToCart | IRemoveProductFromCart;

export function fetchProductsStart(): IFetchProductsStart {
  return {
    type: FETCH_PRODUCTS_START,
  };
};

export function fetchProductsSuccess(products: IProduct[]): IFetchProductsSuccess {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    products,
  };
};

export function addProductToCart(cartProduct: ICartProduct): IAddProductToCart {
  return {
    type: ADD_PRODUCT_TO_CART,
    cartProduct,
  };
};

export function removeProductFromCart(id: number): IRemoveProductFromCart {
  return {
    type: REMOVE_PRODUCT_FROM_CART,
    id,
  };
}
