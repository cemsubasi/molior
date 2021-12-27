import axios from '../config';

const Login = (data) => axios('post', '/auth/login', data);
const Logout = () => axios('get', '/auth/logout');
const Signup = (data) => axios('post', '/auth/signup', data);

export { Login, Logout, Signup };
