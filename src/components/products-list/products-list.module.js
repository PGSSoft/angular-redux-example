import {productsListComponent} from './products-list.component.js';

export default angular.module('components.productsList', [])
  .component('productsList', productsListComponent)
  .name;
