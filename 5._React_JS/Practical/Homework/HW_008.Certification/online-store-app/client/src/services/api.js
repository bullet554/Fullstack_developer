import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api';

export const authApi = {
    register: (data) => axios.post(`${API_BASE_URL}/auth/register`, data),
    login: (data) => axios.post(`${API_BASE_URL}/auth/login`, data),
};

export const productApi = {
    getProducts: () => axios.get(`${API_BASE_URL}/products`),
};

export const cartApi = {
    getCart: () => axios.get(`${API_BASE_URL}/cart`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }),
    addToCart: (item) => axios.post(`${API_BASE_URL}/cart`, item, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    }),
    removeFromCart: (itemId) => axios.delete(`${API_BASE_URL}/cart/${itemId}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
    })
};