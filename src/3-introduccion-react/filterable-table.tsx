import { useState } from 'react';

import { ProductTable } from './components/product-table';
import { SearchBar } from './components/search-bar';
import { IProduct } from './products';

export function FilterableTable({ products }: { products: IProduct[] }) {
  const [filterValue, setFilterValue] = useState<string>('');
  const [inStock, setInStock] = useState<boolean>(false);

  return (
    <>
      <SearchBar
        filterValue={filterValue}
        onChangeFilterValue={setFilterValue}
        inStock={inStock}
        onChangeInStock={setInStock}
      />
      <ProductTable products={products} filterText={filterValue} onlyInStock={inStock} />
    </>
  );
}
