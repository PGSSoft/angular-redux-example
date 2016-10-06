import angular from 'angular';
import { combineReducers } from 'redux';
import ngRedux from 'ng-redux';
import { productsInfo } from './redux/reducers';

import productsListModule from './components/products-list/products-list.module.js';

function AppController() {}

angular.module('app.starter', [ngRedux, productsListModule])
  .config(($ngReduxProvider) => {
    const reducer = combineReducers({ productsInfo });
    $ngReduxProvider.createStoreWith(reducer);
  })
  .controller('AppController', AppController);

angular.bootstrap(document, ['app.starter']);
