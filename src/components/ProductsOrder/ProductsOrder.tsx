import * as React from 'react'
import './ProductsOrder.css';

export interface IProductsOrderProps {
  onOrderChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export enum ProductsOrderEnum {
  Ascending = 'ascending',
  Descending = 'descending',
}

export const DEFAULT_ORDER_VALUE = ProductsOrderEnum.Descending

export default ProductsOrder

function ProductsOrder ({ onOrderChange }: IProductsOrderProps) {
  return (
    <select name='products-order' onChange={onOrderChange}>
      {Object.keys(ProductsOrderEnum).map((key: string) => (
        <option value={ProductsOrderEnum[key]} selected={ProductsOrderEnum[key] === DEFAULT_ORDER_VALUE} key={key}>
          {key}
        </option>
      ))}
    </select>
  )
}
