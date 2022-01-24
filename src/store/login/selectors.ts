import { RootState } from '../store';

export const loginDataSelector = (state: RootState) => state.login;
export const loginSelector = (state: RootState) => state.login.user?.login;
export const tokenSelector = (state: RootState) => state.login.user?.token;
