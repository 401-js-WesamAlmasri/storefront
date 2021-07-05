import './SimpleCart.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeFromCartAction } from '../../store/cart';
import { incrementInStockAction } from '../../store/products';
import { connect } from 'react-redux';

const SimpleCart = (props) => {
  const onDelete = (item) => {
    props.removeFromCart(item._id);
    props.incrementInStock(item._id, item.count);
  }
  return (
    <List className='simple_cart_container'>
      {props.cartItems.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          onDelete={() => onDelete(item)}
        />
      ))}
    </List>
  );
};

const CartItem = ({ item, onDelete }) => {
  return (
    <ListItem>
      <ListItemText primary={item.name} />
      <ListItemText primary={item.count} />
      <IconButton aria-label='delete'>
        <DeleteIcon onClick={onDelete} color='secondary' />
      </IconButton>
    </ListItem>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart,
});

const mapDispatchToProps = {
  removeFromCart: removeFromCartAction,
  incrementInStock: incrementInStockAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
