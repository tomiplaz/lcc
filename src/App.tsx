import * as React from 'react';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Products from './containers/Products';

class App extends React.Component {
  public render() {
    return (
      <div>
        <Header />
        <Products />
        <Footer />
      </div>
    );
  }
}

export default App;
