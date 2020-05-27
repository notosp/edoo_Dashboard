import * as jwt from 'jsonwebtoken';
import * as moment from 'moment';
import * as ActionType from './contant';

const STORAGE = 'state_auth';
const initState = {}

const initializeState = () => {
    const auth = localStorage.getItem(STORAGE);
    const state = auth ? JSON.parse(auth) : initState;
    return state;
}

const reducer = (state = initializeState(), action) => {
    const { type, value } = action;
    let attributes;
    let accessToken;
    let decode;

    switch (type) {
        case ActionType.AUTH_SET:
            attributes = value.attributes || {};
            accessToken = attributes.accessToken;

            if (accessToken) {
                decode = jwt.decode(accessToken);
            }

            if (decode) {
                attributes.expires = moment(decode.exp * 1000).format('YYYY-MM-DD HH:mm:ss Z');
            }

            localStorage.setItem(STORAGE, JSON.stringify(value));
            return { ...value };
        case ActionType.AUTH_SET_TOKEN:
            attributes = state.attributes || {};
            attributes.accessToken = value;

            decode = jwt.decode(value);
            if (decode) {
                attributes.expires = moment(decode.exp * 1000).format('YYYY-MM-DD HH:mm:ss Z');
            }

            const auth = { ...state, attributes };
            localStorage.setItem(STORAGE, JSON.stringify(auth));
            console.log('-->', auth.attributes);
            return { ...auth };
        case ActionType.AUTH_CLEAR:
            localStorage.removeItem(STORAGE);
            return {}
        default:
            return state;
    }
}

export default reducer;
