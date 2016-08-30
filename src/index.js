import angular from 'angular';
import styles  from 'index.css';
import config  from 'index.json';
import {createStore} from 'redux';
import reducers from './reducers.js'
import ngRedux from 'ng-redux';

function AppController() {
  
}

angular.module('app.starter', [ngRedux])
  .config(($ngReduxProvider) => {
    let reducer = combineReducers(reducers);
    $ngReduxProvider.createStoreWith(reducer);
  });
  .controller('AppController', AppController);

angular.bootstrap(document, ['app.starter']);
