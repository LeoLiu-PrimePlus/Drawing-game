import { CHANGE_STEP }  from '../actionTypes';

const initialState = 'init';

export default function notifyMsgReducer (state = initialState, action) {
    const payload = action.payload;
    console.log('payload', payload)
    switch (action.type) {
        case CHANGE_STEP: {
            return payload.step
        }
        default: {
            return state;
        }
    }
}