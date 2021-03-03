import { axiosCall } from "../../Data";
export const addComment = (arg) => (dispatch) => {
  axiosCall("put", "/comments", arg)
    .then(() => dispatch({ type: "ADD_COMMENT", payload: arg }))
    .catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
export const add2cart = (arg) => {
	return {type: 'ADD2CART', payload: arg}
}
export const add2storage = (arg) => {
	return {type: 'ADD2STORAGE', payload: arg}
}
