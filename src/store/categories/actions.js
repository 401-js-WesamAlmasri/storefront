import { GET_CATEGORIES, ACTIVE_CATEGORY } from './actionTypes';
import superagent from 'superagent';

const apiCategories = 'https://api-js401.herokuapp.com/api/v1/categories';

export const getCategoriesActionAsync = () => async(dispatch, state) => {
  const response = await superagent.get(apiCategories);
  dispatch(getCategoriesAction(response.body.results));
}

const getCategoriesAction = (categories) => ({
  type: GET_CATEGORIES,
  payload: categories,
});

export const activeCategoryAction = (categoryName) => ({
  type: ACTIVE_CATEGORY,
  payload: {
    name: categoryName,
  },
});
