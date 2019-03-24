import * as React from 'react';
import { ICartItem } from 'src/types/Cart';
import { IProduct } from 'src/types/Product';

interface IAddToCartButtonProps {
  product: IProduct;
  onAddToCart: (cartItem: ICartItem) => void;
}

export default class AddToCartButton extends React.Component<IAddToCartButtonProps> {
  constructor(props: IAddToCartButtonProps) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  public onClick() {
    this.props.onAddToCart({ productId: this.props.product.id, count: 1 });
  }

  public render() {
    return (
      <button onClick={this.onClick}>Add To Cart</button>
    );
  }
}
