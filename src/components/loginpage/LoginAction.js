import { axiosCall, url3 } from "../../data";

export const setAdmin = (arg) => (dispatch) => {
	axiosCall("post", url3, arg)
		.then((res) => dispatch({ type: "SET_ADMIN", payload: res }))
		.catch((err) =>
			dispatch({
				type: "SET_ERR",
				payload: {
					status: true,
					classname: "alert alert-danger",
					message: "Baglanti Hatasi",
				},
			})
		);
};
