export const INCREASE_ITEM_COUNT = 'INCREASE_ITEM_COUNT';
export const INCREASE_ITEM_COUNT_SUCCESS = 'INCREASE_ITEM_COUNT_SUCCESS';
export const INCREASE_ITEM_COUNT_ERROR = 'INCREASE_ITEM_COUNT_ERROR';

export const IncreaseItemCount = (data) => ({
  type: INCREASE_ITEM_COUNT,
  payload: data,
});
