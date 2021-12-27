import { put, takeLatest } from 'redux-saga/effects';
import {
  GET_ALL_CART_ITEMS,
  GET_ALL_CART_ITEMS_SUCCESS,
  GET_ALL_CART_ITEMS_ERROR,
} from '../../actions/cart';

function* GetAllCartItemsSaga(action) {
  yield put({ type: GET_ALL_CART_ITEMS_SUCCESS, payload: action.payload });
}

export default function* GetAllCartItemsWatcher() {
  yield takeLatest(GET_ALL_CART_ITEMS, GetAllCartItemsSaga);
}
