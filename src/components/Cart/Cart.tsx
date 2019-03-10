import * as React from 'react';
import { ICartProduct } from 'src/types/CartProduct';
import './Cart.css';

interface ICartProps {
  cart: ICartProduct[];
}

function Cart({ cart }: ICartProps) {
  return (
    <div className="cart">
      <h4>Cart ({cart.length})</h4>
    </div>
  );
}

export default Cart;
