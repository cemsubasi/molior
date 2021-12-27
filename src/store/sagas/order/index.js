import { all } from 'redux-saga/effects';
import AddAnOrderWatcher from './add_an_order.saga';
import GetAllOrdersWatcher from './get_all_orders.saga';

export default function* orderSaga() {
  yield all([AddAnOrderWatcher(), GetAllOrdersWatcher()]);
}
