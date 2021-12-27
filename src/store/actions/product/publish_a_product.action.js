export const PUBLISH_A_PRODUCT = 'PUBLISH_A_PRODUCT';
export const PUBLISH_A_PRODUCT_SUCCESS = 'PUBLISH_A_PRODUCT_SUCCESS';
export const PUBLISH_A_PRODUCT_ERROR = 'PUBLISH_A_PRODUCT_ERROR';

export const PublishAProduct = (data) => ({
  type: PUBLISH_A_PRODUCT,
  payload: data,
});
