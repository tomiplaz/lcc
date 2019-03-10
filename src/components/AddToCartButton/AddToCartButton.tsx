import * as React from 'react';
import { ICartItem } from 'src/types/Cart';

interface IAddToCartButtonProps {
  cartItem: ICartItem;
  onAddToCart: (cartItem: ICartItem) => void;
}

export default class AddToCartButton extends React.Component<IAddToCartButtonProps> {
  constructor(props: IAddToCartButtonProps) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  public onClick() {
    this.props.onAddToCart(this.props.cartItem);
  }

  public render() {
    return (
      <button onClick={this.onClick}>Add To Cart</button>
    );
  }
}
