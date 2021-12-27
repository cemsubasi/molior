import { put, takeLatest } from 'redux-saga/effects';
import {
  DECREASE_ITEM_COUNT,
  DECREASE_ITEM_COUNT_SUCCESS,
  DECREASE_ITEM_COUNT_ERROR,
} from '../../actions/cart';

function* DecreaseItemCountSaga(action) {
  yield put({ type: DECREASE_ITEM_COUNT_SUCCESS, payload: action.payload });
}

export default function* DecreaseItemCountWatcher() {
  yield takeLatest(DECREASE_ITEM_COUNT, DecreaseItemCountSaga);
}
