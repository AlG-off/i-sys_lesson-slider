import {
    SET_OPTIONS,
    SET_SLIDES,
    SET_BREADCRUMBS
} from './constants/actionTypes';

const initialState = {
    slides: null,
    breadcrumbs: null,
    currentSlide: 0,
    options: {
        urls: [],
        breadcrumbs: true,
        controls: true,
        delay: 0,
        transition: 'liner'
    }
};

export default function updateState(state = initialState, action) {
    switch (action.type) {
        case SET_OPTIONS:
            return {
                ...state,
                options: {
                    ...state.options,
                    ...action.payload
                }
            };
        case SET_SLIDES:
            return {
                ...state,
                slides: action.payload
            };
        case SET_BREADCRUMBS:
            return {
                ...state,
                breadcrumbs: action.payload
            };
        default:
            return state;
    }
}