import axios from '../config';

const AddAProduct = (data) => axios('post', '/products', data);
const GetAllProducts = () => axios('get', '/products');
const UpdateAProduct = (data) => axios('put', '/products/update', data);
const PublishAProduct = (data) => axios('patch', '/products', data);
const RemoveAProduct = (data) => axios('delete', '/products', { data });
const IncreaseProductStock = (data) =>
  axios('patch', '/products/stock?increase=true', data);
const DecreaseProductStock = (data) =>
  axios('patch', '/products/stock?decrease=true', data);

export {
  AddAProduct,
  GetAllProducts,
  UpdateAProduct,
  PublishAProduct,
  RemoveAProduct,
  IncreaseProductStock,
  DecreaseProductStock,
};
