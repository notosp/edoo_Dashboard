import request from '../utils/request-school';

export default {
    listProvinsi: async (resource) => {
        const resp = await request.get(`provinsi`);
        return {
            meta: resp.meta,
            data: resp
        };
    },
    list: async (resource) => {
        const resp = await request.get(`klasifikasi-list`);
        return {
            meta: resp.meta,
            data: resp
        };
    },
};