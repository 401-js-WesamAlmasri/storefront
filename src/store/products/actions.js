import superagent from 'superagent';
import { ACTIVE_CATEGORY } from '../categories';
import {
  GET_PRODUCTS,
  DECREMENT_IN_STOCK,
  INCREMENT_IN_STOCK,
} from './actionTypes';

const apiProduct = 'https://api-js401.herokuapp.com/api/v1/products';

export const getProductsActionAsync = () => async (dispatch, state) => {
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

export const decrementInStockAction = (id, count = 1) => ({
  type: DECREMENT_IN_STOCK,
  payload: {
    _id: id,
    count,
  },
});

export const incrementInStockAction = (id, count = 1) => ({
  type: INCREMENT_IN_STOCK,
  payload: {
    _id: id,
    count,
  },
});
