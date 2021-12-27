import { put, takeLatest } from 'redux-saga/effects';
import {
  REMOVE_FROM_CART,
  REMOVE_FROM_CART_SUCCESS,
  REMOVE_FROM_CART_ERROR,
} from '../../actions/cart';

function* RemoveFromCartSaga(action) {
  yield put({ type: REMOVE_FROM_CART_SUCCESS, payload: action.payload });
}

export default function* RemoveFromCartWatcher() {
  yield takeLatest(REMOVE_FROM_CART, RemoveFromCartSaga);
}
