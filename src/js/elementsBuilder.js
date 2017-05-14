import MainContainer from './components/MainContainer';
import Slides from './components/Slides';
import Arrows from './components/Arrows';
import Breadcrumbs from './components/Breadcrumbs';
import DataNotFound from './components/DataNotFound';

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
            return MainContainer(action.payload);
        case CREATE_SLIDES:
            return Slides(action.payload);
        case CREATE_ARROWS:
            return Arrows(action.payload);
        case CREATE_BREADCRUMBS:
            return Breadcrumbs(action.payload);
        case CREATE_DATA_NOT_FOUND:
        default:
            return DataNotFound()
    }
}