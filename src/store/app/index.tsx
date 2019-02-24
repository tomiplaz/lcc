import { ICartProduct } from 'src/types/CartProduct';

export interface IAppState {
  isFetchingProducts: boolean;
  cart: ICartProduct[];
};
