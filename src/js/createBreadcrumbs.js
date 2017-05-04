import {
    CLASS_BREADCRUMBS,
    CLASS_BREADCRUMBS_ITEM,
    CLASS_BREADCRUMBS_ITEM_ACTIVE
} from './constants';

export default function createBreadcrumbs(amount) {
    const divContainer = document.createElement('div');

    for (let i = 0; i < amount; i++) {
        const point = document.createElement('div');

        if (i === 0) {
            point.classList.add(CLASS_BREADCRUMBS_ITEM, CLASS_BREADCRUMBS_ITEM_ACTIVE);
        } else {
            point.classList.add(CLASS_BREADCRUMBS_ITEM);
        }

        point.setAttribute('data-key', i);

        divContainer.appendChild(point);
    }

    divContainer.classList.add(CLASS_BREADCRUMBS);

    return divContainer;
}