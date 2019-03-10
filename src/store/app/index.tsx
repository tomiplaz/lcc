import { ICart } from 'src/types/Cart';

export interface IAppState {
  isFetchingProducts: boolean;
  cart: ICart;
};
