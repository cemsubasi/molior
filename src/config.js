import axios from "axios";

export let dateParsed = new Date().toUTCString();
dateParsed = dateParsed.split(" ").slice(1, 4).join(" ");

export const url = "/api";
export const url2 = "/others";
export const url3 = "/neva";
export const url4 = "/others/edit";
export const url5 = "/others/stock";

export const secret = "munchhh";

const instance = axios.create({
	baseURL:
		process.env.NODE_ENV === "production"
			? "https://molior-server.3hree1ne.com"
			: "http://localhost:4004",
	timeout: 10000,
	withCredentials: "true",
	headers: { "content-type": "application/json" },
});

export const axiosCall = (method, URL, postArg) => {
	return new Promise((resolve, reject) => {
		instance[method](URL, postArg)
			.then((res) => resolve(res.data))
			.catch((err) => reject(err));
	});
};

export const data = {
	postState: [],
	testState: {},
	cart: [],
	editState: {},
	errState: {
		status: false,
		classname: "",
		message: "",
		error: {},
	},
	isAdmin: true,
};
