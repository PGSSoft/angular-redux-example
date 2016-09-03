import productsListTemplate from './products-list.html';
import { changeSort, changeFilter } from '../../redux/actions';
import { sortedProductsSelector } from '../../redux/selectors';

const productsListComponent = {
  template: productsListTemplate,
  controller($scope, $ngRedux) {
    $scope.$on('$destroy', $ngRedux.connect(s =>
      sortedProductsSelector(s), { changeSort, changeFilter })(this));
  },
};

export { productsListComponent as default };
