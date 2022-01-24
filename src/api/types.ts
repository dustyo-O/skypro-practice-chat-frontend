export type BaseApiResponse = {
    status: 'ok' | 'error';
};

export type LoginApiResponse = BaseApiResponse & {
    login?: string;
    token?: string;
}

export type ChatRoomCreateApiResponse = BaseApiResponse & {
    roomId?: string;
}
