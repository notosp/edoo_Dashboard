import axios from 'axios';

export default {
  instance: (baseURL) => {
    axios.defaults.baseURL = baseURL;
    axios.defaults.headers['Content-type'] = 'application/json';
    axios.defaults.headers['Access-Control-Allow-Origin'] = true;
    return axios;
  }
}