import { call, put, select, takeLeading } from 'redux-saga/effects'

import { ACTION_CHAT_CREATE_ROOM, ChatCreateRoomAction, chatCreateRoomError, chatCreateRoomSuccess } from './actions';

import { Api } from '../../api/api';
import { tokenSelector } from '../login/selectors';
import { ChatRoomCreateApiResponse } from '../../api/types';

function* chatCreateRoomSaga() {
  console.log('chatCreateRoom saga');
  try {
    const token: string = yield select(tokenSelector);
    const response: ChatRoomCreateApiResponse = yield call(Api.createChatRoom, token);

    if (response.status === 'error') {
      throw new Error('Unknown API Error');
    }

    yield put(chatCreateRoomSuccess(response.roomId || ''));
  } catch (e) {
    if (!(e instanceof Error)) return;

    yield put(chatCreateRoomError(e.message));
  }
}

export function* chatSaga() {
  yield takeLeading(ACTION_CHAT_CREATE_ROOM, chatCreateRoomSaga);
}
