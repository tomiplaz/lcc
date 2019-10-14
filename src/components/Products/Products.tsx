import * as React from 'react';
import { IProduct } from 'src/types/Product';
import { ICartItem } from 'src/types/Cart';
import './Products.css';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

export interface IProductsProps {
  products: IProduct[];
  addToCart: (cartItem: ICartItem) => void;
}

export default Products;

function Products({ products, addToCart }: IProductsProps) {
  return (
    <section>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src="product.jpg" alt={product.name} />
            {product.name}<br/>
            {product.description}<br/>
            {product.price}
            <AddToCartButton
              product={product}
              onAddToCart={addToCart}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
