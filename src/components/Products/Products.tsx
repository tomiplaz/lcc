import * as React from 'react';
import { IProduct } from 'src/types/Product';
import './Products.css';

export interface IProductsProps {
  items: IProduct[];
}

function Products({ items }: IProductsProps) {
  return (
    <section>
      <ul>
        {items.map(item => <li key={item.name}>
          <img src="item.jpg" alt={item.name} />
          {item.name}
        </li>)}
      </ul>
    </section>
  );
}

export default Products;
