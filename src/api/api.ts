import { UserLoginPayload } from '../store/login/types';
import { UserRegisterPayload } from '../store/register/types';
import { apiRequest } from './request';
import { BaseApiResponse, LoginApiResponse } from './types';

export const Api = {
    registerUser(user: UserRegisterPayload): Promise<BaseApiResponse> {
        console.log('registerUser');

        return apiRequest('/user/register', user);
    },

    loginUser(user: UserLoginPayload): Promise<LoginApiResponse> {
        console.log('loginUser');

        return apiRequest('/user/login', user);
    },

    createChatRoom(token: string): Promise<BaseApiResponse> {
        console.log('createChatRoom');

        return apiRequest('/chat/create', { token });
    }
}
