export const add2cart = (arg) => (dispatch) => {
	return dispatch({
		type: "ADD2CART",
		payload: { ...arg, cartIndex: Date.now() },
	});
};
export const add2storage = (arg) => {
	return { type: "ADD2STORAGE", payload: arg };
};
