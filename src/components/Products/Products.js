import './Products.css';
import ProductCard from '../ProductCard/ProductCard';
import { connect } from 'react-redux';

function Products(props) {
  return (
    <div className='products_section_container'>
      {
        props.products.map(product => <ProductCard product={product} />)
      }
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});


export default connect(mapStateToProps)(Products);
