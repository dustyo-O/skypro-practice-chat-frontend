import { RegisterAction, ACTION_REGISTER_START, ACTION_REGISTER_INIT, ACTION_REGISTER_SUCCESS, ACTION_REGISTER_ERROR } from './actions';

const INITIAL_STATE = {

};

type RegisterStatus = 'progress' | 'success' | 'error';

type RegisterState = {
  status?: RegisterStatus;
  error?: string;
  user?: {
    login: string;
  }
};

export function registerReducer(state = INITIAL_STATE, action: RegisterAction): RegisterState {
  switch (action.type) {
    case ACTION_REGISTER_START: {
      return {
        ...state,
        status: undefined,
        user: undefined,
      };
    }
    case ACTION_REGISTER_INIT: {
      return {
        ...state,
        status: 'progress',
        user: {
          login: action.payload.login
        },
      };
    }
    case ACTION_REGISTER_SUCCESS: {
      return {
        ...state,
        status: 'success',
        user: {
          login: action.payload
        },
      };
    }
    case ACTION_REGISTER_ERROR: {
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
