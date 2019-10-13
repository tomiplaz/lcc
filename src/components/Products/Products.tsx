import * as React from 'react';
import { IProduct } from 'src/types/Product';
import { ICartItem } from 'src/types/Cart';
import './Products.css';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

export interface IProductsProps {
  products: IProduct[];
  addToCart: (cartItem: ICartItem) => void;
}

function Products({ products, addToCart }: IProductsProps) {
  const [dbProducts, setDbProducts]: any = React.useState([])

  React.useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(res => {
        res.json().then(json => setDbProducts(json))
      })
      .catch(err => console.log('Error fetching products:', err))
  }, [])

  return (
    <section>
      <ul>
        {dbProducts.map((product: IProduct) => <li key={product.name}>
          <img src="product.jpg" alt={product.name} />
          {product.name}<br/>
          {product.description}<br/>
          {product.price}
          <AddToCartButton
            product={product}
            onAddToCart={addToCart}
          />
        </li>)}
      </ul>
    </section>
  );
}


export default Products;
