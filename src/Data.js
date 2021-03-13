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
	baseURL: "https://molior-server.herokuapp.com",
	// baseURL: "http://127.0.0.1:4004",
	timeout: 50000,
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
	},
});
axios.default.withCredentials = true;

export const axiosCall = (method, URL, postArg) => {
	return new Promise((resolve, reject) => {
		instance[method](URL, postArg)
			.then((res) => resolve(res.data))
			.catch((err) => reject(err));
	});
};

export const Data = {
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
