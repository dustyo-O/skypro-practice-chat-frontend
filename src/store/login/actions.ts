import { UserLoginPayload } from './types';

export const ACTION_LOGIN_START = 'LOGIN@START' as const;
export const ACTION_LOGIN_INIT = 'LOGIN@INIT' as const;
export const ACTION_LOGIN_SUCCESS = 'LOGIN@SUCCESS' as const;
export const ACTION_LOGIN_ERROR = 'LOGIN@ERROR' as const;

export function loginStart() {
  return {
    type: ACTION_LOGIN_START,
  };
}

export function loginInit(data: UserLoginPayload) {
  return {
    type: ACTION_LOGIN_INIT,
    payload: data,
  };
}

export function loginSuccess(data: { login: string, token: string }) {
  return {
    type: ACTION_LOGIN_SUCCESS,
    payload: data,
  };
}

export function loginError(error: string) {
  return {
    type: ACTION_LOGIN_ERROR,
    payload: error,
  };
}

export type LoginStartAction = ReturnType<typeof loginStart>;
export type LoginInitAction = ReturnType<typeof loginInit>;
export type LoginSuccessAction = ReturnType<typeof loginSuccess>;
export type LoginErrorAction = ReturnType<typeof loginError>;

export type LoginAction =
  | LoginStartAction
  | LoginInitAction
  | LoginSuccessAction
  | LoginErrorAction
  ;
