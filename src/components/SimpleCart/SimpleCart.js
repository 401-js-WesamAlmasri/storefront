import './SimpleCart.css';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { removeFromCartAction } from '../../store/cart';
import { incrementInStockActionAsync } from '../../store/products';
import { useDispatch, useSelector } from 'react-redux';

const SimpleCart = (props) => {
  const state = useSelector(mapStateToProps);
  const dispatch = useDispatch();

  const onDelete = (item) => {
    dispatch(removeFromCartAction(item._id));
    dispatch(incrementInStockActionAsync(item._id, item.count));
  }
  
  
  if(state.cartItems.length === 0) return null;
  
  return (
    <List className='simple_cart_container'>
      {state.cartItems.map((item, index) => (
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
      <IconButton onClick={onDelete} aria-label='delete'>
        <DeleteIcon color='secondary' />
      </IconButton>
    </ListItem>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart,
});

export default SimpleCart;
