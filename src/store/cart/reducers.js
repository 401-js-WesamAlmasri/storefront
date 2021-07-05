import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

let initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let found = false;
      let cart = state.map((item) => {
        if (item._id === action.payload._id) {
          found = true;
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });

      if(!found) cart = [...cart, { ...action.payload, count: 1 }]
      return cart;
    case REMOVE_FROM_CART:
      return state.filter((product) => product._id !== action.payload._id);

    default:
      return state;
  }
};

export default cartReducer;
