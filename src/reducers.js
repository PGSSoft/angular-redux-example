import {CHANGE_SORT, CHANGE_FILTER} from './actions'

export const postsReducer = (state = {}, action) => {
  switch(action.type) {
    case CHANGE_SORT:
      console.log(`Sort is set to:${action.value}`);
      return state;
    case CHANGE_FILTER:
      console.log(`Filter is set to: ${}`);
      return state;
    default:
      return state;
  }
}
