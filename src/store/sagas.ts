import { all } from 'redux-saga/effects';
import { chatSaga } from './chat/sagas';

import { loginSaga } from './login/sagas';
import { registerSaga } from './register/sagas';

export function* rootSaga() {
  yield all([
    loginSaga(),
    registerSaga(),
    chatSaga(),
  ])
}
