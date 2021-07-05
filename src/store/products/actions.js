import { ACTIVE_CATEGORY } from '../categories';
import { DECREMENT_IN_STOCK, INCREMENT_IN_STOCK } from './actionTypes';

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
