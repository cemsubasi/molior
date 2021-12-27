import { call, put, takeLatest } from 'redux-saga/effects';
import * as productService from '../../../services/product.service';
import {
  REMOVE_A_PRODUCT,
  REMOVE_A_PRODUCT_SUCCESS,
  REMOVE_A_PRODUCT_ERROR,
} from '../../actions/product';

function* RemoveAProductSaga(action) {
  try {
    const data = yield call(productService.RemoveAProduct, action.payload);
    if (data) yield put({ type: REMOVE_A_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: REMOVE_A_PRODUCT_ERROR, error: err });
  }
}

export default function* RemoveAProductWatcher() {
  yield takeLatest(REMOVE_A_PRODUCT, RemoveAProductSaga);
}
