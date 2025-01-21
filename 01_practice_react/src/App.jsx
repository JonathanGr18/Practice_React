import { useState } from 'react';

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <th colSpan="2">
        {category}
      </th>
    </tr>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductTable({ products, filterText, inStockOnly }) {
  const rows =[];
  let lastCategory = null;
  
  products.forEach((product) => {
    if(product.name.toLowerCase().indexOf(
      filterText.toLowerCase()) === -1) {
      return;
    } 
    if (inStockOnly && !product.stocked) {
      return;
    } 
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow 
        category={product.category} 
        key={product.category}/>
      );
    }
    rows.push(
      <ProductRow 
      product={product} 
      key={product.name}/>
    );
    lastCategory = product.category;
  });
  return(
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody> {rows} </tbody>
    </table>
  );
}

function SearchBar({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
  return (
    <form>
      <input type="text" 
      value={filterText} 
      placeholder="Buscar..."
      onChange={(e) => onFilterTextChange(e.target.value)}/>
      <label>
        <input type="checkbox"
        checked={inStockOnly}
        onChange={(e) => onInStockOnlyChange(e.target.checked)}/>
        {' '}
        Mostrar productos en stock
      </label>
    </form>
  );
}

function FilterProducts({ products }) {
  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);
  return (
    <div>
      <SearchBar  
        filterText = {filterText} // Propiedades PROPS
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}/>
      <ProductTable 
        products={products} 
        filterText = {filterText} // Propiedades PROPS
        inStockOnly={inStockOnly}/>
    </div>
  );
}

const PRODUCTS = [
  {category: "Fruits", price: "$2.99", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1.99", stocked: false, name: "Orange"},
  {category: "Fruits", price: "$1.59", stocked: true, name: "Banana"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "TV"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "Laptop"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Smartphone"},
  {category: "Drinks", price: "$0.99", stocked: true, name: "Soda"},
  {category: "Drinks", price: "$0.59", stocked: false, name: "Water"},
  {category: "Drinks", price: "$1.99", stocked: true, name: "Juice"},
]

export default function App() {
  return <FilterProducts  products={PRODUCTS}/>
}