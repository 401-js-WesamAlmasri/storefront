// Third party packages
import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Import reducers
import { categoriesReducer } from './categories';
import { productsReducer } from './products';

const reducers = combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
});

const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();
