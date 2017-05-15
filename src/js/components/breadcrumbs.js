import {
    CLASS_BREADCRUMBS,
    CLASS_BREADCRUMBS_ITEM,
    CLASS_BREADCRUMBS_ITEM_ACTIVE
} from '../constants/classNames';

export default function breadcrumbs({amount, listener}) {
    const breadcrumbsContainer = document.createElement('div');

    for (let i = 0; i < amount; i++) {
        const point = document.createElement('div');

        if (i === 0) {
            point.classList.add(CLASS_BREADCRUMBS_ITEM, CLASS_BREADCRUMBS_ITEM_ACTIVE);
        } else {
            point.classList.add(CLASS_BREADCRUMBS_ITEM);
        }

        point.setAttribute('data-key', i);

        breadcrumbsContainer.appendChild(point);
    }

    breadcrumbsContainer.classList.add(CLASS_BREADCRUMBS);
    breadcrumbsContainer.addEventListener('click', listener, false);

    return breadcrumbsContainer;
}