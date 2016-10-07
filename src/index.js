import angular from 'angular';
import { combineReducers } from 'redux';
import ngRedux from 'ng-redux';
import productsInfo from './redux/reducers';

import productsListModule from './components/products-list/products-list.module.js';

angular.module('app.starter', [ngRedux, productsListModule])
  .config(($ngReduxProvider) => {
    const reducer = combineReducers({ productsInfo });
    $ngReduxProvider.createStoreWith(reducer);
  });

angular.bootstrap(document, ['app.starter']);
