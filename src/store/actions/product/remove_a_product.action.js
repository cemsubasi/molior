export const REMOVE_A_PRODUCT = 'REMOVE_A_PRODUCT';
export const REMOVE_A_PRODUCT_SUCCESS = 'REMOVE_A_PRODUCT_SUCCESS';
export const REMOVE_A_PRODUCT_ERROR = 'REMOVE_A_PRODUCT_ERROR';

export const RemoveAProduct = (data) => ({
  type: REMOVE_A_PRODUCT,
  payload: data,
});
