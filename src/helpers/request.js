import axios from 'axios';
import store from '../redux/store';

const apiUrl = process.env.REACT_APP_BASE_URL;

const axiosInit = () => {
    const auth = store.getState().auth;
    axios.defaults.headers.common['Content-type'] = 'application/json';
    axios.defaults.headers.common['Authorization'] = `Bearer ${auth.access_token}`;
    axios.defaults.headers.common['Access-Control-Allow-Origin'] = true;
}

const app = {
    get: async (url) => {
        axiosInit();
        const { data } = await axios.get(`${apiUrl}/${url}`);
        return data;
    },
    post: async (url, params) => {
        axiosInit();
        const { data } = await axios.post(`${apiUrl}/${url}`, params);
        return data;
    },
    put: (url, params) => {
        axiosInit();
        const { data } = axios.put(`${apiUrl}/${url}`, params);
        return data;
    },
    delete: (url, params) => {
        axiosInit();
        const { data } = axios.delete(`${apiUrl}/${url}`, params);
        return data;
    }
};

export default app;