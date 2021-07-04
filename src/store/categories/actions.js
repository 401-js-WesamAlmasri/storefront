import { ACTIVE_CATEGORY } from './actionTypes';

export const activeCategoryAction = (categoryName) => ({
  type: ACTIVE_CATEGORY,
  payload: categoryName,
});
