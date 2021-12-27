import { call, put, takeLatest } from 'redux-saga/effects';
import * as productService from '../../../services/product.service';
import {
  DECREASE_PRODUCT_STOCK,
  DECREASE_PRODUCT_STOCK_SUCCESS,
  DECREASE_PRODUCT_STOCK_ERROR,
} from '../../actions/product';

function* DecreaseProductStockSaga(action) {
  try {
    const data = yield call(
      productService.DecreaseProductStock,
      action.payload
    );
    if (data)
      yield put({ type: DECREASE_PRODUCT_STOCK_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: DECREASE_PRODUCT_STOCK_ERROR, error: err });
  }
}

export default function* DecreaseProductStockWatcher() {
  yield takeLatest(DECREASE_PRODUCT_STOCK, DecreaseProductStockSaga);
}
