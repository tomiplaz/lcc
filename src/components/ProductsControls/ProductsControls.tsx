import * as React from 'react'
import ProductsSort, { IProductsSortProps, ProductsSortEnum } from '../ProductsSort/ProductsSort'
import ProductsOrder, { IProductsOrderProps } from '../ProductsOrder/ProductsOrder'
import './ProductsControls.css'

export interface IProductsControlsProps extends IProductsSortProps, IProductsOrderProps {
  sort: ProductsSortEnum
}

export default ProductsControls

function ProductsControls ({ onSortChange, onOrderChange, sort }: IProductsControlsProps) {
  return (
    <div className='products-controls'>
      <label htmlFor='products-sort'>Sort by: </label>
      <ProductsSort onSortChange={onSortChange} />
      <br/>
      <label htmlFor='products-order'>Order: </label>
      <ProductsOrder onOrderChange={onOrderChange} sort={sort} />
    </div>
  )
}
