import { call, put, takeLatest } from 'redux-saga/effects';
import * as productService from '../../../services/product.service';
import {
  GET_ALL_PRODUCTS,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_ERROR,
} from '../../actions/product';

function* GetAllProductsSaga(action) {
  try {
    const data = yield call(productService.GetAllProducts);
    if (data) yield put({ type: GET_ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: GET_ALL_PRODUCTS_ERROR, error: err });
  }
}

export default function* GetAllProductsWatcher() {
  yield takeLatest(GET_ALL_PRODUCTS, GetAllProductsSaga);
}
