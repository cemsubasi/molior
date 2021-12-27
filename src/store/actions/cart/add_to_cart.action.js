export const ADD_TO_CART = 'ADD_TO_CART';
export const ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
export const ADD_TO_CART_ERROR = 'ADD_TO_CART_ERROR';

export const AddToCart = (data) => ({
  type: ADD_TO_CART,
  payload: data,
});
