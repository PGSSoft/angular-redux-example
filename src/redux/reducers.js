import _ from 'lodash';
import { CHANGE_SORT, CHANGE_FILTER } from './actions.js';

const initialState = {
  products: [
    { id: 0, name: 'Fabulous product', price: 10 },
    { id: 1, name: 'Super product', price: 2 },
    { id: 2, name: 'Amazing thing', price: 4 },
    { id: 3, name: 'Nothing to do here', price: 2000 },
  ],
  sort: 'id',
  filter: 'one',
};

const productsInfo = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SORT:
      return _.extend({}, state, { sort: action.value });
    case CHANGE_FILTER:
      return _.extend({}, state, { filter: action.value });
    default:
      return state;
  }
};

export { productsInfo as default };
