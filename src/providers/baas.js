import request from '../utils/request-dummy';

export default {
  list: async (resource) => {
    const resp = await request.get(`tables/${resource}`);
    return {
      meta: resp.meta,
      data: resp.data.map(m => ({ id: m.id, ...m.attributes }))
    };
  },
  update: (resource, attributes) => {
    return request.patch(`tables/${resource}`, { data: { "type": "author", attributes } });
  },
  insert: (resource, attributes) => {
    return request.post(`tables/${resource}`, { data: { attributes } });
  },
  delete: (resource) => {
    return request.delete(`tables/${resource}`);
  },
};