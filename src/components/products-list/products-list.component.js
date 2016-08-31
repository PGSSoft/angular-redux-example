import productsListTemplate from './products-list.html';
import {changeSort, changeFilter} from '../../actions';
import {connect} from 'ng-redux';
import {sortFilterSelector} from '../../selectors';

export const productsListComponent = {
    template: productsListTemplate,
    controller: function($scope, $ngRedux) {
      $scope.$on('$destroy', $ngRedux.connect(s => sortFilterSelector(s), {changeSort, changeFilter})(this));
    }
};
