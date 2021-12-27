import { combineReducers } from 'redux';

import auth from './auth';
import cart from './cart';
import product from './product';
import order from './order';

const reducers = combineReducers({
  auth,
  cart,
  product,
  order,
});

export default reducers;
