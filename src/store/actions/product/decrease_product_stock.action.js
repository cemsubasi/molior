export const DECREASE_PRODUCT_STOCK = 'DECREASE_PRODUCT_STOCK';
export const DECREASE_PRODUCT_STOCK_SUCCESS = 'DECREASE_PRODUCT_STOCK_SUCCESS';
export const DECREASE_PRODUCT_STOCK_ERROR = 'DECREASE_PRODUCT_STOCK_ERROR';

export const DecreaseProductStock = (data) => ({
  type: DECREASE_PRODUCT_STOCK,
  payload: data,
});
