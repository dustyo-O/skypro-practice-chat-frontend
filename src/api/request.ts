const API_ORIGIN = 'http://localhost:7000';

export function apiRequest<T>(url: string, data: { [key: string]: string }): Promise<T> {
    return fetch(API_ORIGIN + url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => response.json());
}
