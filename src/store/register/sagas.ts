import { call, put, takeLeading } from 'redux-saga/effects'

import { ACTION_REGISTER_INIT, registerError, RegisterInitAction, registerSuccess } from './actions';

import { Api } from '../../api/api';
import { BaseApiResponse } from '../../api/types';

function* registerUserSaga(action: RegisterInitAction) {
   console.log('registerUser saga');
   try {
      const response: BaseApiResponse = yield call(Api.registerUser, action.payload);

      if (response.status === 'error') {
         throw new Error('Unknown API Error');
      }

      yield put(registerSuccess(action.payload.login));
   } catch (e) {
      if (!(e instanceof Error)) return;

      yield put(registerError(e.message));
   }
}

// Starts fetchUser on each dispatched USER_FETCH_REQUESTED action
// Allows concurrent fetches of user
export function* registerSaga() {
  yield takeLeading(ACTION_REGISTER_INIT, registerUserSaga);
}
