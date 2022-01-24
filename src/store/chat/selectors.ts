import { RootState } from '../store';

export const createStatusSelector = (state: RootState) => state.chat.createStatus;
