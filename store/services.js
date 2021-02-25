import axios from 'axios';
const baseUrl = 'https://lizena.com.ua/';

export const getService = (url, options={}) => {
    try {
        return axios.get(`${baseUrl}${url}`, options);
    } catch(error) {
        console.log(error);
    }
}

export const getByIdService = (url) => {
    try {
        return axios.get(`${baseUrl}${url}`);
    } catch(error) {
        console.log(error);
    }
}

export const postService = (url, data, options = {}) => {
    try {
        return axios.post(`${baseUrl}${url}`, data, options);
    } catch(error) {
        console.log(error);
    }
}


export const updateService = (url, data, options = {}) => {
    try {
        return axios.put(`${baseUrl}${url}`, data, options);
    } catch(error) {
        console.log(error);
    }
}

export const deleteService = async(url, options) => {
    try {
        return axios.delete(`${baseUrl}${url}`, options);
    } catch(error) {
        console.log(error);
    }
}
