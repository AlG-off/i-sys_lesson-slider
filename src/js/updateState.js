import {
    SET_OPTIONS,
    SET_SLIDES,
    SET_BREADCRUMBS,
    DISPLAY_SLIDE,
    SET_TIMER
} from './constants/actionTypes';

const initialState = {
    slides: null,
    breadcrumbs: null,
    timer: null,
    currentSlide: 0,
    prevSlide: 0,
    options: {
        urls: [],
        breadcrumbs: true,
        controls: true,
        delay: 0,
        transition: 'none'
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
        case DISPLAY_SLIDE:
            return {
                ...state,
                prevSlide: state.currentSlide,
                currentSlide: action.payload
            };
        case SET_TIMER:
            return {
                ...state,
                timer: action.payload
            };
        default:
            return state;
    }
}