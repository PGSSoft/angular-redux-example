import angular from 'angular';
import styles  from 'index.css';
import {createStore, combineReducers} from 'redux';
import reducers from './reducers.js'
import ngRedux from 'ng-redux';

import productsListModule from './components/products-list/products-list.module.js';

function AppController() {
  console.log('main page');
}

angular.module('app.starter', [ngRedux, productsListModule])
  .config(($ngReduxProvider) => {
    let reducer = combineReducers(reducers);
    $ngReduxProvider.createStoreWith(reducer);
  })
  .controller('AppController', AppController);

angular.bootstrap(document, ['app.starter']);
