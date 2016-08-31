import {createSelector} from 'reselect';

export const sortSelector = state => state.productsInfo.sort;
export const filterSelector = state => state.productsInfo.filter;

export const sortFilterSelector = createSelector(
  sortSelector,
  filterSelector,
  (sort, filter) => ({sort, filter})
);
