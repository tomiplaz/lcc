import { IDomainState } from '.';
import { DomainAction } from './actions';
import { FETCH_PRODUCTS_SUCCESS } from '../app/actions';

const initialState: IDomainState = {
  products: [],
}

export function domainReducer(state: IDomainState = initialState, action: DomainAction): IDomainState {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, products: action.products };
    default:
      return { ...state };
  }
};
