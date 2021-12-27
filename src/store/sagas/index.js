import { all } from 'redux-saga/effects';
import authSaga from './auth';
import cartSaga from './cart';
import orderSaga from './order';
import productSaga from './product';

export default function* rootSaga() {
  yield all([authSaga(), cartSaga(), orderSaga(), productSaga()]);
}
