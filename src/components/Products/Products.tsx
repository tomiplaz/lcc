import * as React from 'react';
import { ICartItem } from 'src/types/Cart';
import './Products.css';
import ProductsContext from '../../contexts/ProductsContext'
import ProductsList from '../ProductsList/ProductsList';
import ProductsSort, { ProductsSortEnum } from '../ProductsSort/ProductsSort';

export interface IProductsProps {
  addToCart: (cartItem: ICartItem) => void;
}

export default Products;

function Products({ addToCart }: IProductsProps) {
  const [sort, setSort] = React.useState<string>(ProductsSortEnum.Name)
  const products = React.useContext(ProductsContext)
  const sortedProducts = [...products].sort((a, b) => a[sort] - b[sort])

  return (
    <section>
      <ProductsSort onChange={onSortChange} />
      <ProductsList products={sortedProducts} />
    </section>
  );

  function onSortChange (event: React.ChangeEvent<HTMLSelectElement>) {
    setSort(event.target.value)
  }
}
