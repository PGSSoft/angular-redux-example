import productsListTemplate from './products-list.html';
import {changeSort, changeFilter} from '../../actions';
import {connect} from 'ng-redux';

export const productsListComponent = {
    template: productsListTemplate,
    controller: function($scope, $ngRedux) {
      $scope.$on('$destroy', $ngRedux.connect(state => state, {changeSort, changeFilter})(this));
    }
};
