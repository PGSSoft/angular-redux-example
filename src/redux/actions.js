export const CHANGE_SORT = 'CHANGE_SORT';
export const CHANGE_FILTER = 'CHANGE_FILTER';

export const changeSort = (newVal) => ({
  type: CHANGE_SORT,
  value: newVal,
});

export const changeFilter = (newVal) => ({
  type: CHANGE_FILTER,
  value: newVal,
});
