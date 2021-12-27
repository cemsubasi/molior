export const GET_ALL_CART_ITEMS = 'GET_ALL_CART_ITEMS';
export const GET_ALL_CART_ITEMS_SUCCESS = 'GET_ALL_CART_ITEMS_SUCCESS';
export const GET_ALL_CART_ITEMS_ERROR = 'GET_ALL_CART_ITEMS_ERROR';

export const GetAllCartItems = (data) => ({
  type: GET_ALL_CART_ITEMS,
  payload: data,
});
