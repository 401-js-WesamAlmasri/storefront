import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
import { addToCartAction } from '../../store/cart';
import { connect } from 'react-redux';

function Products(props) {
  return (
    <div className='products_section_container'>
      {props.products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
          onAddToCard={() => props.addToCard(product)}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
