import { useEffect } from 'react';
import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
import { addToCartAction } from '../../store/cart';
import { getProductsActionAsync, decrementInStockAction } from '../../store/products';
import { useDispatch, useSelector } from 'react-redux';

function Products(props) {
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  const onAddToCard = (product) => {
    dispatch(addToCartAction(product));
    dispatch(decrementInStockAction(product._id));
  };

  useEffect(() => {
    dispatch(getProductsActionAsync());
  }, [])

  return (
    <div className='products_section_container'>
      {state.products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          onAddToCard={() => onAddToCard(product)}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});


export default Products;
