import { call, put, takeLatest } from 'redux-saga/effects';
import {
  REPRODUCE_A_PRODUCT,
  REPRODUCE_A_PRODUCT_SUCCESS,
  REPRODUCE_A_PRODUCT_ERROR,
} from '../../actions/product';

function* ReproduceAProductSaga(action) {
  yield put({ type: REPRODUCE_A_PRODUCT_SUCCESS, payload: action.payload });
}

export default function* ReproduceAProductWatcher() {
  yield takeLatest(REPRODUCE_A_PRODUCT, ReproduceAProductSaga);
}
