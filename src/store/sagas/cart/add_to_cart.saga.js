import { put, takeLatest } from 'redux-saga/effects';
import {
  ADD_TO_CART,
  ADD_TO_CART_SUCCESS,
  ADD_TO_CART_ERROR,
} from '../../actions/cart';

function* AddToCartSaga(action) {
  yield put({ type: ADD_TO_CART_SUCCESS, payload: action.payload });
}

export default function* AddToCartWatcher() {
  yield takeLatest(ADD_TO_CART, AddToCartSaga);
}
