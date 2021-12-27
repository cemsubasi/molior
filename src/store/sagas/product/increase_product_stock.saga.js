import { call, put, takeLatest } from 'redux-saga/effects';
import * as productService from '../../../services/product.service';
import {
  INCREASE_PRODUCT_STOCK,
  INCREASE_PRODUCT_STOCK_SUCCESS,
  INCREASE_PRODUCT_STOCK_ERROR,
} from '../../actions/product';

function* IncreaseProductStockSaga(action) {
  try {
    const data = yield call(
      productService.IncreaseProductStock,
      action.payload
    );
    if (data)
      yield put({ type: INCREASE_PRODUCT_STOCK_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: INCREASE_PRODUCT_STOCK_ERROR, error: err });
  }
}

export default function* IncreaseProductStockWatcher() {
  yield takeLatest(INCREASE_PRODUCT_STOCK, IncreaseProductStockSaga);
}
