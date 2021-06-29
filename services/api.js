import axios from 'axios';
const headers = {};
import store from '../redux';

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_TARGET_HOST,
    headers,
});

// API.interceptors.request.use((config) => {
//     config.headers.Authorization = `Bearer`;
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// }, 
//     { synchronous: true }

API.interceptors.request.use((request) => {
    const state = store.getState();
    console.log('interceptors',state)

    if (!request.url.includes('login')) {
        request.headers.Authorization = `Bearer ${state.accessToken}`;
    }
    
    return request;
}, function (error) {
    return Promise.reject(error);
}, 
    { synchronous: true }
);

// API.defaults.headers.common['Authorization'] = 'Bearer';

export default API
