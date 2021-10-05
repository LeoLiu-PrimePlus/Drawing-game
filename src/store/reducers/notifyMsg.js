import { NOTIFY_MESSAGE }  from '../actionTypes';

const initialState = {
    msg: '',
    type: ''
};

export default function notifyMsgReducer (state = initialState, action) {
    const payload = action.payload;
    switch (action.type) {
        case NOTIFY_MESSAGE: {
            return {
                msg: payload.notify.msg,
                type: payload.notify.type
            }
        }
        default: {
            return state;
        }
    }
}