import { call, put, takeLatest } from 'redux-saga/effects';
import * as orderService from '../../../services/order.service';
import {
  ADD_AN_ORDER,
  ADD_AN_ORDER_SUCCESS,
  ADD_AN_ORDER_ERROR,
} from '../../actions/order';

function* AddAnOrderSaga(action) {
  try {
    const data = yield call(orderService.AddAnOrder, action.payload);
    if (data) yield put({ type: ADD_AN_ORDER_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: ADD_AN_ORDER_ERROR, error: err });
  }
}

export default function* AddAnOrderWatcher() {
  yield takeLatest(ADD_AN_ORDER, AddAnOrderSaga);
}
