import * as React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import CheckoutForm from './components/CheckoutForm/CheckoutForm'
import Products from './containers/Products';
import Cart from './containers/Cart';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure, AppAction } from './store/app/actions';
import { IProduct } from './types/Product';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { StripeProvider, Elements } from 'react-stripe-elements'

export interface IAppProps {
  dispatchFetchProductsStart: () => void;
  dispatchFetchProductsSuccess: (products: IProduct[]) => void;
  dispatchFetchProductsFailure: () => void;
}

function App ({ dispatchFetchProductsStart, dispatchFetchProductsSuccess, dispatchFetchProductsFailure }: IAppProps) {
  React.useEffect(() => {
    dispatchFetchProductsStart();
    fetch('http://localhost:3000/products')
      .then(res => {
        res.json().then((products: IProduct[]) => {
          dispatchFetchProductsSuccess(products)
        })
      })
      .catch(err => {
        console.log('Error fetching products:', err)
        dispatchFetchProductsFailure()
      })
  }, [])

  return (
    <>
      <Header />
      <Cart />
      <StripeProvider apiKey='pk_test_zlc978gU7kY7LRvqBI9RqnsF'>
        <Elements>
          <CheckoutForm />
        </Elements>
      </StripeProvider>
      <Products />
      <Footer />
    </>
  );
}

function mapDispatchToProps (dispatch: Dispatch<AppAction>) {
  return {
    dispatchFetchProductsStart: () => {
      dispatch(fetchProductsStart())
    },
    dispatchFetchProductsSuccess: (products: IProduct[]) => {
      dispatch(fetchProductsSuccess(products))
    },
    dispatchFetchProductsFailure: () => {
      dispatch(fetchProductsFailure())
    }
  }
}

export default connect(undefined, mapDispatchToProps)(App);
