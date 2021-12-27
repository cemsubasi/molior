export const DECREASE_ITEM_COUNT = 'DECREASE_ITEM_COUNT';
export const DECREASE_ITEM_COUNT_SUCCESS = 'DECREASE_ITEM_COUNT_SUCCESS';
export const DECREASE_ITEM_COUNT_ERROR = 'DECREASE_ITEM_COUNT_ERROR';

export const DecreaseItemCount = (data) => ({
  type: DECREASE_ITEM_COUNT,
  payload: data,
});
