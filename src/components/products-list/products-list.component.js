import productsListTemplate from './products-list.html';
import { changeSort, changeFilter } from '../../redux/actions';
import { sortFilterSelector } from '../../redux/selectors';

const productsListComponent = {
  template: productsListTemplate,
  controller($scope, $ngRedux) {
    $scope.$on('$destroy', $ngRedux.connect(s =>
      sortFilterSelector(s), { changeSort, changeFilter })(this));

    const products = [
      { id: 0, name: 'Fabulous product', price: 10 },
      { id: 1, name: 'Super product', price: 2 },
      { id: 2, name: 'Amazing thing', price: 4 },
      { id: 3, name: 'Nothing to do here', price: 2000 },
    ];

    $scope.$watch('$ctrl.sort', () => {
      this.productsList = products.sort((a, b) => a[this.sort] > b[this.sort]);
    });
  },
};

export { productsListComponent as default };
