import { ACTIVE_CATEGORY, GET_CATEGORIES } from './actionTypes';

let initialState = {
  categories: [],
  activeCategory: '',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };

    case ACTIVE_CATEGORY:
      return {
        ...state,
        activeCategory: action.payload.name,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
