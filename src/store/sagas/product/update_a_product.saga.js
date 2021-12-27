import { call, put, takeLatest } from 'redux-saga/effects';
import * as productService from '../../../services/product.service';
import {
  UPDATE_A_PRODUCT,
  UPDATE_A_PRODUCT_SUCCESS,
  UPDATE_A_PRODUCT_ERROR,
} from '../../actions/product';

function* UpdateAProductSaga(action) {
  try {
    const data = yield call(productService.UpdateAProduct, action.payload);
    if (data) yield put({ type: UPDATE_A_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: UPDATE_A_PRODUCT_ERROR, error: err });
  }
}

export default function* UpdateAProductWatcher() {
  yield takeLatest(UPDATE_A_PRODUCT, UpdateAProductSaga);
}
