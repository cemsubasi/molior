import { all } from 'redux-saga/effects';
import LoginWatcher from './login.saga';
import SignupWatcher from './login.saga';

export default function* authSaga() {
  yield all([LoginWatcher(), SignupWatcher()]);
}
