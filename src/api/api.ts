import { UserLoginPayload } from '../store/login/types';
import { UserRegisterPayload } from '../store/register/types';
import { apiRequest } from './request';
import { BaseApiResponse } from './types';

export const Api = {
    registerUser(user: UserRegisterPayload): Promise<BaseApiResponse> {
        console.log('registerUser');

        return apiRequest('/user/register', user);
    },

    loginUser(user: UserLoginPayload): Promise<BaseApiResponse> {
        console.log('loginUser');

        return apiRequest('/user/login', user);
    }
}
