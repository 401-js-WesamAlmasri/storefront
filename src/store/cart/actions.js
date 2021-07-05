import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

export const addToCartAction = (product) => ({
  type: ADD_TO_CART,
  payload: {
    ...product,
  },
});

export const removeFromCartAction = (id) => ({
  type: REMOVE_FROM_CART,
  payload: {
    _id: id,
  },
});
