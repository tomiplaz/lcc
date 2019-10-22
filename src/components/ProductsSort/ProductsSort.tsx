import * as React from 'react'

export interface IProductsSortProps {
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export enum ProductsSortEnum {
  Name = 'name',
  Price = 'price',
}

export default ProductsSort

function ProductsSort({ onChange }: IProductsSortProps) {
  return (
    <select name='products-sort' onChange={onChange}>
      {Object.keys(ProductsSortEnum).map((key: string) => (
        <option value={ProductsSortEnum[key]} key={key}>{key}</option>
      ))}
    </select>
  )
}
