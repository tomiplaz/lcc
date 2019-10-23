import * as React from 'react'
import './ProductsSort.css';

export interface IProductsSortProps {
  onSortChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export enum ProductsSortEnum {
  Name = 'name',
  Price = 'price',
}

export const DEFAULT_SORT_VALUE = ProductsSortEnum.Name

export default ProductsSort

function ProductsSort({ onSortChange }: IProductsSortProps) {
  return (
    <select name='products-sort' onChange={onSortChange} defaultValue={DEFAULT_SORT_VALUE}>
      {Object.keys(ProductsSortEnum).map((key: string) => (
        <option value={ProductsSortEnum[key]} key={key}>
          {key}
        </option>
      ))}
    </select>
  )
}
