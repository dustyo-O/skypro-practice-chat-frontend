import { call, put, takeLeading } from 'redux-saga/effects'

import { ACTION_LOGIN_INIT, loginError, LoginInitAction, loginSuccess } from './actions';

import { Api } from '../../api/api';
import { LoginApiResponse } from '../../api/types';

function* loginUserSaga(action: LoginInitAction) {
   console.log('loginUser saga');
   try {
      const response: LoginApiResponse = yield call(Api.loginUser, action.payload);

      if (response.status === 'error') {
         throw new Error('Unknown API Error');
      }

      yield put(loginSuccess({ login: action.payload.login, token: String(response.token) }));
   } catch (e) {
      if (!(e instanceof Error)) return;

      yield put(loginError(e.message));
   }
}

export function* loginSaga() {
  yield takeLeading(ACTION_LOGIN_INIT, loginUserSaga);
}
