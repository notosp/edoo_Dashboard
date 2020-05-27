import authAction from '../redux/auth/action';
import request from '../utils/request';

export default {
    login: async (params) => {
        const url = 'services/auth';
        const option = { provider: 'local', data: params };
        const resp = await request.post(url, option);
        authAction.setAuth(resp.data);
        return resp;
    },
    register: async (params) => {
        const url = 'services/auth/account';
        const option = {
            provider: 'local',
            data: params
        };
        const resp = await request.post(url, option);
        console.log(resp);
        
        // authAction.setAuth(resp.data);
        return resp;
    },
    refreshToken: async (refreshToken) => {
        const { data } = await request.patch('services/auth', { refreshToken });
        authAction.setToken(data.attributes.accessToken);
        return data;
    },
    logout: () => {
        authAction.clearAuth();
        return Promise.resolve();
    }
};