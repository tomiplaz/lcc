import * as React from 'react';

interface IAddToCartButtonProps {
  productId: number;
}

export default AddToCartButton

function AddToCartButton ({ productId }: IAddToCartButtonProps) {
  return (
    <button onClick={onClick}>Add To Cart</button>
  )

  function onClick () {
    console.log(productId)
    // TODO: Add to Cart Context
  }
}
