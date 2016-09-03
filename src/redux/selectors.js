import { createSelector } from 'reselect';

export const sortSelector = state => state.productsInfo.sort;
export const filterSelector = state => state.productsInfo.filter;
export const productsSelector = state => state.productsInfo.products;

export const sortedProductsSelector = createSelector(
  productsSelector,
  sortSelector,
  (products, sort) => ({ products: products.sort((a, b) => a[sort] > b[sort]) })
);
