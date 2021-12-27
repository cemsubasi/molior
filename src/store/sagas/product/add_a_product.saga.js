import { call, put, takeLatest } from 'redux-saga/effects';
import * as productService from '../../../services/product.service';
import {
  ADD_A_PRODUCT,
  ADD_A_PRODUCT_SUCCESS,
  ADD_A_PRODUCT_ERROR,
} from '../../actions/product';

function* AddAProductSaga(action) {
  try {
    const data = yield call(productService.AddAProduct, action.payload);
    if (data) yield put({ type: ADD_A_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: ADD_A_PRODUCT_ERROR, error: err });
  }
}

export default function* AddAProductWatcher() {
  yield takeLatest(ADD_A_PRODUCT, AddAProductSaga);
}
