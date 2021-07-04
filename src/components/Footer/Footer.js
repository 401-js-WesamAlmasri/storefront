import './Footer.css';
import { AppBar, Toolbar, Typography, Container } from '@material-ui/core';

function Footer() {
  return (
    <AppBar component='footer' position='relative'>
      <Container maxWidth='md'>
        <Toolbar className='footer_text_container'>
          <Typography variant='body1' color='inherit'>
            © 2021 All copyrights reserved Our store
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
