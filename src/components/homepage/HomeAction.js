import { axiosCall, url } from "../../config";

export const fetchPosts = () => (dispatch) => {
	axiosCall("get", url)
		.then((res) => dispatch({ type: "FETCH_POSTS", payload: res }))
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
