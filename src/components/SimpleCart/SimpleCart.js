import './SimpleCart.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeFromCartAction } from '../../store/cart';
import { connect } from 'react-redux';

const SimpleCart = (props) => {
  console.log('props.cartItems : ', props.cartItems)
  return (
    <List className='simple_cart_container'>
      {props.cartItems.map((item, index) => (
        <CartItem
          key={index}
          item={item}
          onDelete={() => props.removeFromCart(item._id)}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
