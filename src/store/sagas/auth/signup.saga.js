import { call, put, takeLatest } from 'redux-saga/effects';
import * as authService from '../../../services/auth.service';
import { SIGNUP, SIGNUP_SUCCESS, SIGNUP_ERROR } from '../../actions/auth';

function* SignupSaga(action) {
  try {
    const data = yield call(authService.Signup, action.payload);
    if (data) yield put({ type: SIGNUP_SUCCESS, payload: data });
  } catch (err) {
    yield put({ type: SIGNUP_ERROR, error: err });
  }
}

export default function* SignupWatcher() {
  yield takeLatest(SIGNUP, SignupSaga);
}
