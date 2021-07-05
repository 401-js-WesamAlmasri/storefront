import { ACTIVE_CATEGORY } from './actionTypes';

let initialState = {
  categories: [
    {
      name: 'electronics',
      displayName: 'electronics',
      description: 'All Electronic devices that you need'
    },
    {
      name: 'food',
      displayName: 'food',
      description: 'All delicious food that you love'
    }
  ],
  activeCategory: '',
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
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
