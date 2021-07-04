import { ACTIVE_CATEGORY } from '../categories';

export const activeCategoryAction = (categoryName) => ({
  type: ACTIVE_CATEGORY,
  payload: categoryName,
});
