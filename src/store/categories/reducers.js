import { ACTIVE_CATEGORY } from './actionTypes';

let initialState = {
  categories: ['electronics', 'food', 'console', 'mobile', 'phones', 'shirts'],
  activeCategory: '',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
