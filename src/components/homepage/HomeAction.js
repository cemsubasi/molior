import { axiosCall, url } from "../../Data";

export const fetchPosts = () => (dispatch) => {
	axiosCall("get", url).then((res) =>
		dispatch({ type: "FETCH_POSTS", payload: res })
	);
};
