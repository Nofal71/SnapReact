import axios, { AxiosRequestConfig, AxiosResponse, AxiosHeaderValue } from 'axios';
import { globalApi } from './globalApi';

const baseURL: string = globalApi;

export const instance = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export type RequestType = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export const makeRequest = async <T>(
    type: RequestType,
    path: string = '',
    body: any = null,
    options: AxiosRequestConfig = {}
): Promise<T> => {
    try {
        const headers: Record<string, AxiosHeaderValue> = {
            ...(options.headers as Record<string, AxiosHeaderValue>),
        };

        if (body instanceof FormData) {
            headers['Content-Type'] = 'multipart/form-data';
            console.log('formData');
        } else if (body) {
            headers['Content-Type'] = 'application/json';
        }

        const config: AxiosRequestConfig = {
            timeout: 30000,
            headers,
            ...options,
        };

        let response: AxiosResponse<T>;

        switch (type.toUpperCase()) {
            case 'GET':
                response = await instance.get<T>(path, config);
                break;
            case 'POST':
                response = await instance.post<T>(path, body, config);
                break;
            case 'PUT':
                response = await instance.put<T>(path, body, config);
                break;
            case 'PATCH':
                response = await instance.patch<T>(path, body, config);
                break;
            case 'DELETE':
                response = await instance.delete<T>(path, config);
                break;
            default:
                throw new Error('Unsupported request type');
        }

        return response.data;
    } catch (error) {
        throw error;
    }
};
