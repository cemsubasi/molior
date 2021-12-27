export const REPRODUCE_A_PRODUCT = 'REPRODUCE_A_PRODUCT';
export const REPRODUCE_A_PRODUCT_SUCCESS = 'REPRODUCE_A_PRODUCT_SUCCESS';
export const REPRODUCE_A_PRODUCT_ERROR = 'REPRODUCE_A_PRODUCT_ERROR';

export const ReproduceAProduct = (data) => ({
  type: REPRODUCE_A_PRODUCT,
  payload: data,
});
