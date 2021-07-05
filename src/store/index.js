// Third party packages
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import reducers
import { categoriesReducer } from './categories';
import { productsReducer } from './products';
import { cartReducer } from './cart';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
