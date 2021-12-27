import { put, takeLatest } from 'redux-saga/effects';
import {
  INCREASE_ITEM_COUNT,
  INCREASE_ITEM_COUNT_SUCCESS,
  INCREASE_ITEM_COUNT_ERROR,
} from '../../actions/cart';

function* IncreaseItemCountSaga(action) {
  yield put({ type: INCREASE_ITEM_COUNT_SUCCESS, payload: action.payload });
}

export default function* IncreaseItemCountWatcher() {
  yield takeLatest(INCREASE_ITEM_COUNT, IncreaseItemCountSaga);
}
