import * as React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './containers/Products';
import Cart from './containers/Cart';

class App extends React.Component {
  public render() {
    return (
      <>
        <Header />
        <Cart />
        <Products />
        <Footer />
      </>
    );
  }
}

export default App;
