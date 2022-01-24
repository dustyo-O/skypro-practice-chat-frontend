export const ACTION_CHAT_CREATE_ROOM = 'CHAT@CREATE_ROOM' as const;
export const ACTION_CHAT_CREATE_ROOM_SUCCESS = 'CHAT@CREATE_ROOM_SUCCESS' as const;
export const ACTION_CHAT_CREATE_ROOM_ERROR = 'CHAT@CREATE_ROOM_ERROR' as const;

export function chatCreateRoom() {
  return {
    type: ACTION_CHAT_CREATE_ROOM,
  };
}

export function chatCreateRoomSuccess(roomId: string) {
  return {
    type: ACTION_CHAT_CREATE_ROOM_SUCCESS,
    payload: roomId,
  };
}

export function chatCreateRoomError(message: string) {
  return {
    type: ACTION_CHAT_CREATE_ROOM_ERROR,
    payload: message,
  };
}

export type ChatCreateRoomAction = ReturnType<typeof chatCreateRoom>;
export type ChatCreateRoomSuccessAction = ReturnType<typeof chatCreateRoomSuccess>;
export type ChatCreateRoomErrorAction = ReturnType<typeof chatCreateRoomError>;

export type ChatAction =
  | ChatCreateRoomAction
  | ChatCreateRoomSuccessAction
  | ChatCreateRoomErrorAction
  ;
