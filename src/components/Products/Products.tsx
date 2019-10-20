import * as React from 'react';
import { ICartItem } from 'src/types/Cart';
import './Products.css';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import ProductsContext from '../../contexts/ProductsContext'

export interface IProductsProps {
  addToCart: (cartItem: ICartItem) => void;
}

export default Products;

function Products({ addToCart }: IProductsProps) {
  const products = React.useContext(ProductsContext)

  return (
    <section>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
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
