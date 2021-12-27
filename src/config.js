import axios from 'axios';

const baseURL =
  process.env.NODE_ENV === 'production'
    ? 'https://molior-server.3hree1ne.com/api/v1'
    : 'http://localhost:4004/api/v1';

const instance = axios.create({
  baseURL,
  timeout: 10000,
  withCredentials: 'true',
  headers: { 'content-type': 'application/json' },
});

const customAxios = (method, url, body) =>
  new Promise((resolve, reject) => {
    instance[method](url, body)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err));
  });

export default customAxios;
