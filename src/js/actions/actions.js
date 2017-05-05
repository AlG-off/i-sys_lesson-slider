import {
    CREATE_CONTAINER,
    CREATE_SLIDES,
    CREATE_BREADCRUMBS,
    CREATE_ARROWS
} from '../constants/actionTypes';

export function createArrow() {
    return {type: CREATE_ARROWS}
}

export function createContainer() {
    return {type: CREATE_CONTAINER}
}