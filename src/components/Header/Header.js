import './Header.css';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { connect } from 'react-redux';

function Header(props) {
  return (
      <AppBar position='relative'>
        <Toolbar>
          <Typography variant='h6' component='h1'>
            OUR STORE
          </Typography>
        </Toolbar>
      </AppBar>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart
})

export default connect(mapStateToProps)(Header);
