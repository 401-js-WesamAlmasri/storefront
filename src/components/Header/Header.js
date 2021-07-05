import './Header.css';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { connect } from 'react-redux';

function Header(props) {
  const cartItems = props.cart.reduce((count, item) => {
    return count + item.count
  }, 0)
  return (
      <AppBar position='relative'>
        <Toolbar className='header_toolbar'>
          <Typography variant='h6' component='h1'>
            OUR STORE
          </Typography>
          <Typography color="inherit"> CART ({cartItems})</Typography>
        </Toolbar>
      </AppBar>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

export default connect(mapStateToProps)(Header);
