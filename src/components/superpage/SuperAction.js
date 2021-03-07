import { axiosCall, url2, url4, url5 } from "../../Data";

export const addPost = (arg) => (dispatch) => {
	axiosCall("post", url2, arg)
		.then(() => dispatch({ type: "ADD_POST", payload: arg }))
		.catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
export const deletePost = (arg) => (dispatch) => {
	axiosCall("delete", url2, { data: { productURL: arg } })
		.then(() => dispatch({ type: "DELETE_POST", payload: arg }))
		.catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
export const featuredPost = (arg) => (dispatch) => {
	axiosCall("put", url2, { productURL: arg.productURL, publish: !arg.publish })
		.then(() => dispatch({ type: "FEATURED_POST", payload: arg.productURL }))
		.catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
export const handleStock = (arg) => (dispatch) => {
	axiosCall("put", url5, { productURL: arg.productURL, count: arg.count })
		.then(() => dispatch({ type: "HANDLE_STOCK", payload: arg }))
		.catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
export const replacePost = (arg) => (dispatch) => {
	axiosCall("put", url4, {
		productURL: arg.productURL,
		productHeader: arg.productHeader,
		productBody: arg.productBody,
		discount: arg.discount,
		shipping: arg.shipping,
		size: arg.size,
		price: arg.price,
		category: arg.category,
		collect: arg.collect,
		stock: arg.stock,
	})
		.then(() => dispatch({ type: "REPLACE_POST", payload: arg }))
		.catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
export const setErr = (arg) => (dispatch) => {
	// post sent successfuly
	if (arg === 0) {
		setTimeout(() => dispatch({ type: "SET_ERR", payload: -1 }), 3000);
		return dispatch({ type: "SET_ERR", payload: 0 });
	}
	// post didnt send
	if (arg === 1) {
		setTimeout(() => dispatch({ type: "SET_ERR", payload: -1 }), 3000);
		return dispatch({ type: "SET_ERR", payload: 1 });
	}
	// post deleted successfuly
	if (arg === 2) {
		setTimeout(() => dispatch({ type: "SET_ERR", payload: -1 }), 3000);
		return dispatch({ type: "SET_ERR", payload: 2 });
	}
};
export const editPost = (arg) => {
	return { type: "EDIT_POST", payload: arg };
};
export const choose = (arg) => {
	return { type: "CHOOSE_INPUT", payload: arg };
};
export const addPhoto = (arg) => (dispatch) => {
	axiosCall("post", "/photos", arg)
		.then(() => dispatch({ type: "ADD_PHOTO", payload: arg }))
		.catch((err) => dispatch({ type: "ERR_MESSAGE", payload: err }));
};
export const setTest = (arg) => {
	return { type: "SET_TEST", payload: arg };
};
