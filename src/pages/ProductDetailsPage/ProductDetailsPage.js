import './ProductDetailsPage.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import { When } from 'react-if';
import { useSelector, useDispatch } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { addToCartAction } from '../../store/cart';
import { decrementInStockActionAsync } from '../../store/products';

const ProductDetailsPage = (props) => {
  let { productId } = useParams();
  const dispatch = useDispatch();
  const state = useSelector(mapStateToProps);

  const onAddToCard = (product) => {
    dispatch(addToCartAction(product));
    dispatch(decrementInStockActionAsync(product._id));
  };

  const product = state.products.find((p) => p._id === productId);

  return (
    <Container maxWidth='sm'>
      <Typography className='product_name_header' variant='h4' align='center'>
        {product.description}
      </Typography>

      <Grid container>
        <Grid item xs={12}>
          <img
            alt={product.name}
            src={`https://source.unsplash.com/random?${product.name}`}
          />
        </Grid>
        <Grid item xs={6}>
          <Typography variant='h5' color='textSecondary' paragraph>
            In Stock: <strong>{product.inStock}</strong>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography className='product_price' variant='h5' paragraph>
            ${product.price}
          </Typography>
        </Grid>
      </Grid>

      <When condition={product.inStock >= 1}>
        <Button
          className='buy_product_btn'
          variant='contained'
          color='primary'
          onClick={() => onAddToCard(product)}
        >
          Buy
        </Button>
      </When>

      <Grid container className='product_related'>
        <Grid item xs={12}>
          <Typography variant='h4' gutterBottom={true}>
            Related Items
          </Typography>
        </Grid>

        <Grid item xs={4}>
          <Paper className='product_related_item'>Suggestion 1</Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className='product_related_item'>Suggestion 2</Paper>
        </Grid>

        <Grid item xs={4}>
          <Paper className='product_related_item'>Suggestion 3</Paper>
        </Grid>
      </Grid>

      <Typography variant='h4' gutterBottom={true}>
        Product Details
      </Typography>
      <Typography>Name: {product.name}</Typography>
      <Typography>Category: {product.category}</Typography>
      <Typography>In Stock: {product.inStock}</Typography>
      <Typography>Price: {product.price} $</Typography>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
});

export default ProductDetailsPage;
