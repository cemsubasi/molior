import { axiosCall, url2, url4, url5 } from "../../Data";
const succObj = {
	status: true,
	classname: "alert alert-success",
	message: "İşlem başarıyla tamamlandı!",
};
const errObj = {
	status: true,
	classname: "alert alert-danger",
	message: "Hata",
};
export const setErr = (arg, dispatch) => {
	setTimeout(
		() =>
			dispatch({
				type: "SET_ERR",
				payload: { status: false, classname: "", message: "", error: {} },
			}),
		3000
	);
	return dispatch({ type: "SET_ERR", payload: arg });
};

export const addPost = (arg) => (dispatch) => {
	axiosCall("post", url2, arg)
		.then(() => {
			dispatch({ type: "ADD_POST", payload: arg });
			setErr(succObj, dispatch);
		})
		.catch((err) => setErr({ ...errObj, error: err }, dispatch));
};
export const deletePost = (arg) => (dispatch) => {
	axiosCall("delete", url2, { data: { productURL: arg } })
		.then(() => {
			dispatch({ type: "DELETE_POST", payload: arg });
			setErr(succObj, dispatch);
			dispatch({ type: "SET_ERR", payload: succObj });
		})
		.catch((err) => setErr({ ...errObj, error: err }, dispatch));
};
export const featuredPost = (arg) => (dispatch) => {
	axiosCall("put", url2, { productURL: arg.productURL, publish: !arg.publish })
		.then(() => {
			dispatch({ type: "FEATURED_POST", payload: arg.productURL });
			setErr(succObj, dispatch);
			dispatch({ type: "SET_ERR", payload: succObj });
		})
		.catch((err) => setErr({ ...errObj, error: err }, dispatch));
};
export const handleStock = (arg) => (dispatch) => {
	axiosCall("put", url5, { productURL: arg.productURL, count: arg.count })
		.then(() => {
			dispatch({ type: "HANDLE_STOCK", payload: arg });
			setErr(succObj, dispatch);
		})
		.catch((err) => setErr({ ...errObj, error: err }, dispatch));
};
export const replacePost = (arg) => (dispatch) => {
	axiosCall("put", url4, {
		id: arg.id,
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
		.then(() => {
			setErr(succObj, dispatch);
			dispatch({ type: "REPLACE_POST", payload: arg });
		})
		.catch((err) => setErr({ ...errObj, error: err }, dispatch));
};
export const editPost = (arg) => {
	return { type: "EDIT_POST", payload: arg };
};
export const choose = (arg) => {
	return { type: "CHOOSE_INPUT", payload: arg };
};
export const setTest = (arg) => {
	return { type: "SET_TEST", payload: arg };
};
