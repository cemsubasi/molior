export const ADD_A_PRODUCT = 'ADD_A_PRODUCT';
export const ADD_A_PRODUCT_SUCCESS = 'ADD_A_PRODUCT_SUCCESS';
export const ADD_A_PRODUCT_ERROR = 'ADD_A_PRODUCT_ERROR';

export const AddAProduct = (data) => ({
  type: ADD_A_PRODUCT,
  payload: data,
});
