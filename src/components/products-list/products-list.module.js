import 'angular-material';
import 'angular-material/angular-material.css';

import productsListComponent from './products-list.component.js';
import './products-list.css';

export default angular.module('components.productsList', ['ngMaterial'])
  .component('productsList', productsListComponent)
  .name;
