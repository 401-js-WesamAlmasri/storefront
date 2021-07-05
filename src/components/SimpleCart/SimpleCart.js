import './Products.css';
import { connect } from 'react-redux';

function SimpleCart(props) {
  return (
    <div className='products_section_container'>
      <h1>Simple Cart</h1>
    </div>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default connect(mapStateToProps)(SimpleCart);
