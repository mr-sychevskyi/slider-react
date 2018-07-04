import {get} from '../../../api/index';
import {
    GET_SLIDES_REQUEST,
    GET_SLIDES_SUCCESS,
    GET_SLIDES_FAILURE
} from './constants';

export const loadSlides = () => dispatch => dispatch({
    CALL_API: {
        types: [
            GET_SLIDES_REQUEST,
            GET_SLIDES_SUCCESS,
            GET_SLIDES_FAILURE
        ],
        endpoint: () => get('slides')
    }
});
