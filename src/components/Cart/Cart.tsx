import * as React from 'react';
import { ICart } from 'src/types/Cart';
import './Cart.css';

interface ICartProps {
  cart: ICart;
}

function Cart({ cart }: ICartProps) {
  return (
    <div className="cart">
      <h4>Cart: {cart.count}, {cart.value}</h4>
    </div>
  );
}

export default Cart;
