import Container from './components/Container';
import Arrow from './components/Arrow';

import {
    CREATE_CONTAINER,
    CREATE_SLIDES,
    CREATE_ARROWS,
    CREATE_BREADCRUMBS
} from './constants/actionTypes';


export default function elementsBuilder(action) {
    switch (action.type) {
        case CREATE_CONTAINER:
            return Container();
        case CREATE_SLIDES:
            return
    }
}