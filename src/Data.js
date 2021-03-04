import axios from 'axios'

export let dateParsed = new Date().toUTCString();
dateParsed = dateParsed.split(" ").slice(1, 4).join(" ");

export const url = "/api"
export const url2 = "/others"
export const url3 = "/punchvenegro"
export const url4 = "/others/edit";

export const bannerHead = '#iyiolacagiz';
export const homePageTitle = 'Munch Punch ve Negrodan Sevgilerle ';
export const secret = 'munchhh';

const instance = axios.create({
		baseURL: 'https://molior-server.herokuapp.com
		timeout: 50000,
	headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
	},
});
axios.default.withCredentials = true;

export const axiosCall = (method, URL, postArg) => {
	return new Promise((resolve, reject) => {
			 instance[method](URL, postArg)
			 .then(res => resolve(res.data))
			 .catch(err => reject(err))
	})
}

export const Data = {
	  postState: [],
		photoState: [],
		productState: [],
		cart: [],
		editState: '',
	  errState: -1,
	  isAdmin: true,
	  errMessage: "",
		superInputState: 'post',
	
};
