import { IDomainState } from './domain';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { IAppState } from './app';
import { domainReducer } from './domain/reducer';
import { appReducer } from './app/reducer';
import { DomainAction } from './domain/actions';
import { AppAction } from './app/actions';

export interface IStoreState {
  domain: IDomainState;
  app: IAppState;
};

export type StoreAction = DomainAction | AppAction;

const reducer = combineReducers({
  domain: domainReducer,
  app: appReducer,
});

export const store = createStore<IStoreState, StoreAction, {}, {}>(
  reducer,
  applyMiddleware(thunk)
);
