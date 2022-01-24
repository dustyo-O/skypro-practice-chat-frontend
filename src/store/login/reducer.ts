import { ACTION_LOGIN_ERROR, ACTION_LOGIN_INIT, ACTION_LOGIN_START, ACTION_LOGIN_SUCCESS, LoginAction } from './actions';

const INITIAL_STATE: LoginState = {
  status: undefined,
  user: undefined,
};

type LoginStatus = 'progress' | 'success' | 'error';

type LoginState = {
  status?: LoginStatus;
  error?: string;
  user?: {
    login: string;
    token?: string;
  }
};

export function loginReducer(state = INITIAL_STATE, action: LoginAction): LoginState {
  switch (action.type) {
    case ACTION_LOGIN_START: {
      return {
        ...state,
        status: undefined,
        user: undefined,
      };
    }
    case ACTION_LOGIN_INIT: {
      return {
        ...state,
        status: 'progress',
        user: {
          login: action.payload.login
        },
      };
    }
    case ACTION_LOGIN_SUCCESS: {
      return {
        ...state,
        status: 'success',
        user: action.payload,
      };
    }
    case ACTION_LOGIN_ERROR: {
      return {
        ...state,
        status: 'error',
        error: action.payload,
      };
    }
    default:
      return state;
  }
}
