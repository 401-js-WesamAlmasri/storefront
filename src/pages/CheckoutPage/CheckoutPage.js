import './CheckoutPage.css';
import React from 'react';
import { useSelector } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function CheckoutPage(props) {
  const state = useSelector(mapStateToProps);
  const total = state.cart.reduce((total, item) => total + item.count * item.price, 0);

  return (
    <div className='checkout_container'>
      <form>
        <Paper>
          <Typography variant='h5' gutterBottom>
            Order summary
          </Typography>
          <List>
            {state.cart.map((item) => (
              <ListItem key={item._id}>
                <ListItemText
                  primary={item.name}
                  secondary={item.description}
                />
                <Typography variant='body2'>
                  ${item.price.toFixed(2)} <b>X</b> {item.count}
                </Typography>
              </ListItem>
            ))}
            <ListItem>
              <ListItemText primary='Total' />
              <Typography variant='subtitle1'>
                <b>${total.toFixed(2)}</b>
              </Typography>
            </ListItem>
          </List>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Typography variant='h6' gutterBottom >
                Billing Address
              </Typography>
              <TextField id='name' name='name' label='Full Name' />
              <TextField id='address' name='address' label='Address' />
              <TextField id='city' name='city' label='City' />
              <TextField id='state' name='state' label='State' />
              <TextField id='zip' name='zip' label='zip' />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant='h6' gutterBottom>
                Payment details
              </Typography>
              <TextField
                id='cc_number'
                name='cc_number'
                label='Credit Card #'
              />
              <TextField
                id='date'
                label='Expiration'
                type='date'
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField id='cvv' name='cvv' label='CVV' />
            </Grid>
          </Grid>

          <Grid container alignItems='center' justify='center' spacing={5}>
            <Grid item>
              <Button variant='contained' color='primary'>
                Place Your Order
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cart: state.cart,
});

export default CheckoutPage;
