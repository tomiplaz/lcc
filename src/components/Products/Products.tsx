import * as React from 'react';
import { ICartItem } from 'src/types/Cart';
import './Products.css';
import ProductsContext from '../../contexts/ProductsContext'
import ProductsList from '../ProductsList/ProductsList';
import { DEFAULT_SORT_VALUE, ProductsSortEnum } from '../ProductsSort/ProductsSort';
import { DEFAULT_ORDER_VALUE, ProductsOrderEnum } from '../ProductsOrder/ProductsOrder';
import ProductsControls from '../ProductsControls/ProductsControls';
import { IProduct } from 'src/types/Product';

export interface IProductsProps {
  addToCart: (cartItem: ICartItem) => void;
}

export default Products;

function Products({ addToCart }: IProductsProps) {
  const [sort, setSort] = React.useState<ProductsSortEnum>(DEFAULT_SORT_VALUE)
  const [order, setOrder] = React.useState<ProductsOrderEnum>(DEFAULT_ORDER_VALUE)
  const products = React.useContext(ProductsContext)
  const sortedProducts = [...products].sort(sortProducts)

  return (
    <section className='products'>
      <ProductsControls
        onSortChange={onSortChange}
        onOrderChange={onOrderChange}
        sort={sort}
      />
      <ProductsList products={sortedProducts} />
    </section>
  )

  function sortProducts (productA: IProduct, productB: IProduct) {
    const property = sort as string

    return order === ProductsOrderEnum.Ascending
      ? productA[property] - productB[property]
      : productB[property] - productA[property]
  }

  function onSortChange (event: React.ChangeEvent<HTMLSelectElement>) {
    setSort(event.target.value as ProductsSortEnum)
  }

  function onOrderChange (event: React.ChangeEvent<HTMLSelectElement>) {
    setOrder(parseInt(event.target.value, 10) as ProductsOrderEnum)
  }
}
