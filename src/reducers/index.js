import {combineReducers} from 'redux';

import {
    GET_SLIDES_REQUEST,
    GET_SLIDES_SUCCESS,
    GET_SLIDES_FAILURE
} from '../controllers/load-slides/services/constants';

export const DEFAULT_STATE = {
    data: [],
    isLoading: false
};

const slides = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case GET_SLIDES_REQUEST:
            return {...state};
        case GET_SLIDES_SUCCESS:
            return {
                ...state,
                data: action.response,
                isLoading: true
            };
        case GET_SLIDES_FAILURE:
            return DEFAULT_STATE;

        default:
            return state;
    }
};

export default combineReducers({slides});
