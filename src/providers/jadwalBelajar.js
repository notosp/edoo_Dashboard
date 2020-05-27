import request from '../utils/request-dummy';

export default {
  list: async (resource) => {
    const resp = await request.get(`${resource}`);
    return {
      data: resp
    };
  },
  update: (resource, attributes) => {
    return request.patch(`${resource}`, { data: { "type": "jadwalBelajar", attributes } });
  },
  insert: (resource, attributes) => {
    return request.post(`${resource}`, { data: { attributes } });
  },
  delete: (resource) => {
    return request.delete(`${resource}`);
  },
};