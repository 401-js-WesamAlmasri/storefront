import './Products.css';
import ProductCard from '../ProductCard/ProductCard';

function Products() {
  return (
    <div className='products_section_container'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}

export default Products;
