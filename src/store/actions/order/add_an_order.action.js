export const ADD_AN_ORDER = 'ADD_AN_ORDER';
export const ADD_AN_ORDER_SUCCESS = 'ADD_AN_ORDER_SUCCESS';
export const ADD_AN_ORDER_ERROR = 'ADD_AN_ORDER_ERROR';

export const AddAnOrder = (data) => ({
  type: ADD_AN_ORDER,
  payload: data,
});
