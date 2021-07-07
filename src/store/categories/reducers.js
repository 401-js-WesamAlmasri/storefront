import { ACTIVE_CATEGORY, GET_CATEGORIES } from './actionTypes';

let initialState = {
  categories: [
    {
      _id: '5f0cdc15acac790017fc26ce',
      name: 'food',
      description: 'Stuff for you to eat',
    },
    {
      _id: '5f0cdc25acac790017fc26cf',
      name: 'electronics',
      description: 'Making your life easier, one volt at a time',
    },
  ],
  activeCategory: 'food',
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
