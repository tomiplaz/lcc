import * as React from 'react'
import ProductsSort, { IProductsSortProps } from '../ProductsSort/ProductsSort'
import ProductsOrder, { IProductsOrderProps } from '../ProductsOrder/ProductsOrder'

export interface IProductsControlsProps extends IProductsSortProps, IProductsOrderProps {}

export default ProductsControls

function ProductsControls ({ onSortChange, onOrderChange }: IProductsControlsProps) {
  return (
    <div className='products-controls'>
      <label htmlFor='products-sort'>Sort by: </label>
      <ProductsSort onSortChange={onSortChange} />
      <br/>
      <label htmlFor='products-order'>Order: </label>
      <ProductsOrder onOrderChange={onOrderChange} />
    </div>
  )
}
