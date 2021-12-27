import { call, put, takeLatest } from 'redux-saga/effects';
import * as authService from '../../../services/auth.service';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from '../../actions/auth';

function* LoginSaga(action) {
  try {
    const data = yield call(authService.Login, action.payload);
    if (data) yield put({ type: LOGIN_SUCCESS, payload: data });
    // else
    // 	yield put({type: LOGIN_ERROR, payload})
  } catch (err) {
    yield put({ type: LOGIN_ERROR, error: err });
  }
}

export default function* LoginWatcher() {
  yield takeLatest(LOGIN, LoginSaga);
}
