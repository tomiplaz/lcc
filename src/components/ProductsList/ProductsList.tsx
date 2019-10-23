import * as React from 'react'
import { IProduct } from 'src/types/Product'
import './ProductsList.css';

export interface IProductsListProps {
  products: IProduct[];
}

export default ProductsList

function ProductsList({ products }: IProductsListProps) {
  return (
    <ul className='products-list'>
      {products.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.name} />
          {product.name}<br/>
          {product.description}<br/>
          {product.price}
        </li>
      ))}
    </ul>
  )
}
