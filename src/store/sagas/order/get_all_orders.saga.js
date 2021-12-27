import { call, put, takeLatest } from 'redux-saga/effects';
import * as orderService from '../../../services/order.service';
import {
  GET_ALL_ORDERS,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_ERROR,
} from '../../actions/order';

function* GetAllOrdersSaga(action) {
  try {
    const data = yield call(orderService.GetAllOrders, action.payload);
    if (data) yield put({ type: GET_ALL_ORDERS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: GET_ALL_ORDERS_ERROR, error: err });
  }
}

export default function* GetAllOrdersWatcher() {
  yield takeLatest(GET_ALL_ORDERS, GetAllOrdersSaga);
}
