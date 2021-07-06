import { ACTIVE_CATEGORY } from '../categories';
import {
  GET_PRODUCTS,
  DECREMENT_IN_STOCK,
  INCREMENT_IN_STOCK,
} from './actionTypes';

let initialState = {
  allProducts: [],
  products: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        allProducts: action.payload.filter((p) => p.inStock > 0),
        products: action.payload.filter(
          (p) => p.inStock > 0 && p.category === 'food'
        ),
      };

    case ACTIVE_CATEGORY:
      return {
        ...state,
        products: state.allProducts.filter(
          (product) => product.category === action.payload.name
        ),
      };

    case DECREMENT_IN_STOCK:
      return {
        products: state.products.map((p) => {
          if (p._id === action.payload._id) {
            return action.payload.product
          }
          return p;
        }),
        allProducts: state.allProducts.map((p) => {
          if (p._id === action.payload._id) {
            return action.payload.product
          }
          return p;
        }),
      };

    case INCREMENT_IN_STOCK:
      return {
        products: state.products.map((p) => {
          if (p._id === action.payload._id) {
            return action.payload.product
          }
          return p;
        }),
        allProducts: state.allProducts.map((p) => {
          if (p._id === action.payload._id) {
            return action.payload.product
          }
          return p;
        }),
      };

    default:
      return state;
  }
};

export default productsReducer;
