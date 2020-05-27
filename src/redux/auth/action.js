import store from '../store';
import * as ActionType from './contant';

export default {
  setAuth: (value) => {
    const action = { type: ActionType.AUTH_SET, value };
    store.dispatch(action);
  },
  setToken: (value) => {
    const action = { type: ActionType.AUTH_SET_TOKEN, value };
    store.dispatch(action);
  },
  clearAuth: (value) => {
    const action = { type: ActionType.AUTH_CLEAR };
    store.dispatch(action);
  }
}