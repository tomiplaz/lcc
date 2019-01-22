import { IAppState } from '.';
import { AppAction, FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS } from './actions';

const initialState: IAppState = {
  isFetchingProducts: false,
};

export function appReducer(state: IAppState = initialState, action: AppAction): IAppState {
  switch (action.type) {
    case FETCH_PRODUCTS_START:
      return { ...state, isFetchingProducts: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, isFetchingProducts: false };
    default:
      return { ...state };
  }
};
