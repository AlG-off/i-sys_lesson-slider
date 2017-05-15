import mainContainer from './components/mainContainer';
import slides from './components/slides';
import arrows from './components/arrows';
import breadcrumbs from './components/breadcrumbs';
import dataNotFound from './components/dataNotFound';

import {
    CREATE_MAIN_CONTAINER,
    CREATE_SLIDES,
    CREATE_ARROWS,
    CREATE_BREADCRUMBS,
    CREATE_DATA_NOT_FOUND
} from './constants/actionTypes';


export default function elementsBuilder(action) {
    switch (action.type) {
        case CREATE_MAIN_CONTAINER:
            return mainContainer(action.payload);
        case CREATE_SLIDES:
            return slides(action.payload);
        case CREATE_ARROWS:
            return arrows(action.payload);
        case CREATE_BREADCRUMBS:
            return breadcrumbs(action.payload);
        case CREATE_DATA_NOT_FOUND:
        default:
            return dataNotFound()
    }
}