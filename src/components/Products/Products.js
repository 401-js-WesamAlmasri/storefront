import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
import { addToCartAction } from '../../store/cart';
import { decrementInStockAction } from '../../store/products';
import { connect } from 'react-redux';

function Products(props) {
  const onAddToCard = (product) => {
    props.addToCard(product);
    props.decrementInStock(product._id);
  };
  return (
    <div className='products_section_container'>
      {props.products.map((product) => (
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

const mapDispatchToProps = {
  addToCard: addToCartAction,
  decrementInStock: decrementInStockAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
