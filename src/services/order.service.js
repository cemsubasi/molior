import axios from '../config';

const AddAnOrder = (data) => axios('post', '/orders', data);
const GetAllOrders = () => axios('get', '/orders');

export { AddAnOrder, GetAllOrders };
