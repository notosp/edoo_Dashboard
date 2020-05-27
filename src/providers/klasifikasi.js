import request from '../utils/request-dummy';

export default {
  list: async (resource) => {
    const resp = await request.get(`klasifikasi-list`);
    return {
      meta: resp.meta,
      data: resp
    };
  },
  update: (resource, attributes) => {
    return request.patch(`klasifikasi-list/${resource}`, { data: { "type": "author", attributes } });
  },
  insert: (resource, attributes) => {
    return request.post(`klasifikasi-list/${resource}`, { data: { attributes } });
  },
  delete: (resource) => {
    return request.delete(`klasifikasi-list/${resource}`);
  },
};