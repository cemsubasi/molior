export const UPDATE_A_PRODUCT = 'UPDATE_A_PRODUCT';
export const UPDATE_A_PRODUCT_SUCCESS = 'UPDATE_A_PRODUCT_SUCCESS';
export const UPDATE_A_PRODUCT_ERROR = 'UPDATE_A_PRODUCT_ERROR';

export const UpdateAProduct = (data) => ({
  type: UPDATE_A_PRODUCT,
  payload: data,
});
