import { call, put, takeLatest } from 'redux-saga/effects';
import * as productService from '../../../services/product.service';
import {
  PUBLISH_A_PRODUCT,
  PUBLISH_A_PRODUCT_SUCCESS,
  PUBLISH_A_PRODUCT_ERROR,
} from '../../actions/product';

function* PublishAProductSaga(action) {
  try {
    const data = yield call(productService.PublishAProduct, action.payload);
    if (data) yield put({ type: PUBLISH_A_PRODUCT_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: PUBLISH_A_PRODUCT_ERROR, error: err });
  }
}

export default function* PublishAProductWatcher() {
  yield takeLatest(PUBLISH_A_PRODUCT, PublishAProductSaga);
}
