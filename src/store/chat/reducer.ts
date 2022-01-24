import { ACTION_CHAT_CREATE_ROOM, ACTION_CHAT_CREATE_ROOM_ERROR, ACTION_CHAT_CREATE_ROOM_SUCCESS, ChatAction } from './actions';

const INITIAL_STATE: ChatState = {

};

type ChatCreateStatus = 'progress' | 'success' | 'error';

type ChatState = {
  createStatus?: ChatCreateStatus
};

export function chatReducer(state = INITIAL_STATE, action: ChatAction): ChatState {
  switch (action.type) {
    case ACTION_CHAT_CREATE_ROOM:
      return {
        ...state,
        createStatus: 'progress',
      };
    case ACTION_CHAT_CREATE_ROOM_SUCCESS:
      return {
        ...state,
        createStatus: 'success',
      };
    case ACTION_CHAT_CREATE_ROOM_ERROR:
      return {
        ...state,
        createStatus: 'error',
      };
    default:
      return state;
  }
}
