import * as React from 'react'
import './ProductsOrder.css';
import { ProductsSortEnum } from '../ProductsSort/ProductsSort';

export interface IProductsOrderProps {
  onOrderChange: (event: React.ChangeEvent<HTMLSelectElement>) => void,
  sort: ProductsSortEnum,
}

export enum ProductsOrderEnum {
  Ascending,
  Descending,
}

export const DEFAULT_ORDER_VALUE = ProductsOrderEnum.Descending

export default ProductsOrder

function ProductsOrder ({ onOrderChange, sort }: IProductsOrderProps) {
  const ascendingText = getAscendingText()
  const descendingText = getDescendingText()

  return (
    <select name='products-order' onChange={onOrderChange} defaultValue={DEFAULT_ORDER_VALUE}>
      <option value={ProductsOrderEnum.Ascending}>
        {ascendingText}
      </option>
      <option value={ProductsOrderEnum.Descending}>
        {descendingText}
      </option>
    </select>
  )

  function getAscendingText() {
    switch (sort) {
      case ProductsSortEnum.Name:
        return 'A to Z'
      case ProductsSortEnum.Price:
        return 'Low to High'
      default:
        return 'Ascending'
    }
  }

  function getDescendingText() {
    switch (sort) {
      case ProductsSortEnum.Name:
        return 'Z to A'
      case ProductsSortEnum.Price:
        return 'High to Low'
      default:
        return 'Descending'
    }
  }
}
