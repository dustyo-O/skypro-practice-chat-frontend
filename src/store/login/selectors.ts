import { RootState } from '../store';

export const registerSelector = (state: RootState) => state.register;
export const loginSelector = (state: RootState) => state.login;
