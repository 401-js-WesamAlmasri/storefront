import './Header.css';
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function Header() {
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

export default Header;
