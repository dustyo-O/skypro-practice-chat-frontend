export type BaseApiResponse = {
    status: 'ok' | 'error';
};

export type LoginApiResponse = BaseApiResponse & {
    login?: string;
    token?: string;
}
