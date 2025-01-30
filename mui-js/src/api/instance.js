import axios from 'axios';
import { globalApi } from './globalApi';

const baseURL = globalApi;

export const instance = axios.create({
    baseURL: baseURL,
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const makeRequest = async (type, path = '', body = null, options = {}) => {
    try {

        const headers = {
            ...options.headers,
        };

        if (body instanceof FormData) {
            headers['Content-Type'] = 'multipart/form-data';
            console.log('formData')
        } else if (body) {
            headers['Content-Type'] = 'application/json';
        }

        const config = {
            timeout: 30000,
            ...options,
        };

        let response;

        switch (type.toUpperCase()) {
            case 'GET':
                response = await instance.get(path, config);
                break;
            case 'POST':
                response = await instance.post(path, body, config);
                break;
            case 'PUT':
                response = await instance.put(path, body, config);
                break;
            case 'PATCH':
                response = await instance.patch(path, body, config);
                break;
            case 'DELETE':
                response = await instance.delete(path, config);
                break;
            default:
                throw new Error('Unsupported request type');
        }

        // return new Promise((resolve) => {
        //     setTimeout(() => {
        //       resolve(response.data);
        //     }, 2000);
        //   });

        return response.data
    } catch (error) {

        throw error; 
    }
};
