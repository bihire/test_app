import axios from 'axios';

export const url = 'http://localhost:5000/api';

export const axiosCall = axios.create({
    baseURL: url,
});

const axiosMethods = {
    get: axiosCall.get,
    post: axiosCall.post,
    patch: axiosCall.patch,
    delete: axiosCall.delete,
    axiosCall,
}

export default axiosMethods;
