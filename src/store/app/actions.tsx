import { IProduct } from 'src/types/product';

export const FETCH_PRODUCTS_START = 'FETCH_PRODUCTS_START';
export type FETCH_PRODUCTS_START = typeof FETCH_PRODUCTS_START;

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export type FETCH_PRODUCTS_SUCCESS = typeof FETCH_PRODUCTS_SUCCESS;

export interface IFetchProductsStart {
  type: FETCH_PRODUCTS_START;
};

export interface IFetchProductsSuccess {
  type: FETCH_PRODUCTS_SUCCESS;
  products: IProduct[];
};

export type AppAction = IFetchProductsStart | IFetchProductsSuccess;

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
