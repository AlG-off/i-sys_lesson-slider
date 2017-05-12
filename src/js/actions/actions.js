import * as types from '../constants/actionTypes';

export function createMainContainer(dataContainer) {
    return {
        type: types.CREATE_MAIN_CONTAINER,
        payload: dataContainer
    }
}

export function createArrows(dataArrows) {
    return {
        type: types.CREATE_ARROWS,
        payload: dataArrows
    }
}

export function createSlides(dataSlides) {
    return {
        type: types.CREATE_SLIDES,
        payload: dataSlides
    }
}

export function createBreadcrumbs(dataBreadcrumbs) {
    return {
        type: types.CREATE_BREADCRUMBS,
        payload: dataBreadcrumbs
    }
}

export function createDataNotFound() {
    return {type: types.CREATE_DATA_NOT_FOUND}
}

export function setOptions(options) {
    return {type: types.SET_OPTIONS, payload: options}
}

export function setSlides(slides) {
    return {type: types.SET_SLIDES, payload: slides}
}

export function setBreadcrumbs(breadcrumbs) {
    return {type: types.SET_BREADCRUMBS, payload: breadcrumbs}
}

export function displaySlide(targetSlide) {
    return {type: types.DISPLAY_SLIDE, payload: targetSlide}
}

export function setTimer(timerId) {
    return {type: types.SET_TIMER, payload: timerId}
}