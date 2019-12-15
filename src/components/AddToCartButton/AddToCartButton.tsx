import * as React from 'react'
import { ICartItem } from 'src/types/Cart'

export default AddToCartButton

interface IAddToCartButtonProps {
  productId: number;
  addToCart: (cartItem: ICartItem) => void;
}

function AddToCartButton ({ productId, addToCart }: IAddToCartButtonProps) {
  return (
    <button onClick={onClick}>Add To Cart</button>
  )

  function onClick () {
    addToCart({ productId, count: 1})
  }
}
