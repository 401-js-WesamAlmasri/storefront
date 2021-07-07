import './Header.css';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header(props) {
  const state = useSelector(mapStateToProps);

  const cartItems = state.cart.reduce((count, item) => {
    return count + item.count;
  }, 0);

  return (
    <AppBar position='relative'>
      <Toolbar className='header_toolbar'>
          <Typography variant='h6' component='h1'>
        <Link className='header_home_link' to='/'>
            OUR STORE
        </Link>
          </Typography>
        <Typography color='inherit'> CART ({cartItems})</Typography>
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default Header;
