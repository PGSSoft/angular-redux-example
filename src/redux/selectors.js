import { createSelector } from 'reselect';
import sortBy from 'lodash/sortBy';

export const sortSelector = state => state.productsInfo.sort;
export const filterSelector = state => state.productsInfo.filter;
export const productsSelector = state => state.productsInfo.products;

export const sortedProductsSelector = createSelector(
  productsSelector,
  sortSelector,
  (products, sort) => ({ products: sortBy(products, sort) })
);
