import superagent from 'superagent';
import { ACTIVE_CATEGORY } from '../categories';
import {
  GET_PRODUCTS,
  DECREMENT_IN_STOCK,
  INCREMENT_IN_STOCK,
} from './actionTypes';

const apiProduct = 'https://api-js401.herokuapp.com/api/v1/products';

export const getProductsActionAsync = () => async (dispatch, getState) => {
  const response = await superagent.get(apiProduct);
  return dispatch(getProductsAction(response.body.results));
};

const getProductsAction = (products) => ({
  type: GET_PRODUCTS,
  payload: products,
});

export const activeCategoryAction = (categoryName) => ({
  type: ACTIVE_CATEGORY,
  payload: {
    name: categoryName,
  },
});

export const decrementInStockActionAsync =
  (id, count = 1) =>
  async (dispatch, getState) => {
    const oldProduct = getState().products.allProducts.find(
      (p) => p._id === id
    );
    const response = await superagent
      .put(`${apiProduct}/${id}`)
      .send({ inStock: oldProduct.inStock - count });

    return dispatch(decrementInStockAction(id, response.body));
  };

const decrementInStockAction = (id, product) => ({
  type: DECREMENT_IN_STOCK,
  payload: {
    _id: id,
    product,
  },
});

export const incrementInStockActionAsync =
  (id, count = 1) =>
  async (dispatch, getState) => {
    const oldProduct = getState().products.allProducts.find(
      (p) => p._id === id
    );
    const response = await superagent
      .put(`${apiProduct}/${id}`)
      .send({ inStock: oldProduct.inStock + count });

    return dispatch(incrementInStockAction(id, response.body));
  };

const incrementInStockAction = (id, product) => ({
  type: INCREMENT_IN_STOCK,
  payload: {
    _id: id,
    product,
  },
});
