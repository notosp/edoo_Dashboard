import request from '../utils/request-dummy';

export default {
  list: async (resource) => {
    const resp = await request.get(`penerbit`);
    return {
      meta: resp.meta,
      data: resp
    };
  },
  update: (resource, attributes) => {
    return request.patch(`penerbit/${resource}`, { data: { "type": "penerbit", attributes } });
  },
  insert: (resource, attributes) => {
    return request.post(`penerbit/${resource}`, { data: { attributes } });
  },
  delete: (resource) => {
    return request.delete(`penerbit/${resource}`);
  },
};