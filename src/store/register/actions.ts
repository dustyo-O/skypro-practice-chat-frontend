import { UserRegisterPayload } from "./types";

export const ACTION_REGISTER_START = 'REGISTER@START' as const;
export const ACTION_REGISTER_INIT = 'REGISTER@INIT' as const;
export const ACTION_REGISTER_SUCCESS = 'REGISTER@SUCCESS' as const;
export const ACTION_REGISTER_ERROR = 'REGISTER@ERROR' as const;

export function registerStart() {
  return {
    type: ACTION_REGISTER_START,
  };
}

export function registerInit(data: UserRegisterPayload) {
  return {
    type: ACTION_REGISTER_INIT,
    payload: data,
  };
}

export function registerSuccess(userName: string) {
  return {
    type: ACTION_REGISTER_SUCCESS,
    payload: userName,
  };
}

export function registerError(error: string) {
  return {
    type: ACTION_REGISTER_ERROR,
    payload: error,
  };
}


export type RegisterStartAction = ReturnType<typeof registerStart>;
export type RegisterInitAction = ReturnType<typeof registerInit>;
export type RegisterSuccessAction = ReturnType<typeof registerSuccess>;
export type RegisterErrorAction = ReturnType<typeof registerError>;

export type RegisterAction =
  | RegisterStartAction
  | RegisterInitAction
  | RegisterSuccessAction
  | RegisterErrorAction
  ;
