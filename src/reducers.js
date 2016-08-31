import {CHANGE_SORT, CHANGE_FILTER} from './actions.js'
import _ from 'lodash';

const initialState = {
  sort: 'size',
  filter: 'one'
}

export const productsInfo =  (state = initialState, action) => {
  switch(action.type) {
    case CHANGE_SORT:
      return _.extend({}, state, {sort: action.value});
    case CHANGE_FILTER:
      return _.extend({}, state, {filter: action.value});
    default:
      return state;
  }
}
