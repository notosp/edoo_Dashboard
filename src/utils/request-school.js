import axios from 'axios';
import store from '../redux/store';

const apiUrl = process.env.REACT_APP_BASE_URL_SCHOOL;

const validateToken = async () => {
    // TODO: Validate Token
    return true;
}

const getHeaders = () => {
    
    const headers = {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Access-Control-Allow-Origin': true
    }

    return headers;
}

const getOption = (method, url, data) => {
    return {
        headers: getHeaders(),
        method,
        url: `${apiUrl}/${url}`,
        data
    }
}

const app = {
    get: async (url) => {
        await validateToken();
        const option = getOption('get', url);
        const {
            data
        } = await axios.request(option);
        return data;
    },
    post: async (url, params) => {
        await validateToken();
        const option = getOption('post', url, params);
        const {
            data
        } = await axios.request(option);
        return data;
    },
    patch: async (url, params) => {
        await validateToken();
        const option = getOption('patch', url, params);
        const {
            data
        } = await axios.request(option);
        return data;
    },
    put: async (url, params) => {
        await validateToken();
        const option = getOption('put', url, params);
        const {
            data
        } = await axios.request(option);
        return data;
    },
    delete: async (url, params) => {
        await validateToken();
        const option = getOption('delete', url, params);
        const {
            data
        } = await axios.request(option);
        return data;
    }
};

export default app;