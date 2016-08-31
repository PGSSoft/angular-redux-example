import {CHANGE_SORT, CHANGE_FILTER} from './actions.js'

export default (state = {}, action) => {
  switch(action.type) {
    case CHANGE_SORT:
      console.log(`Sort is set to:${action.value}`);
      return state;
    case CHANGE_FILTER:
      console.log(`Filter is set to: ${action.value}`);
      return state;
    default:
      return state;
  }
}
