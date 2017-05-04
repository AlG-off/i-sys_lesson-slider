import {
    CLASS_SLIDE_ITEM,
    CLASS_SLIDE,
    CLASS_HIDDEN
} from './constants';

export function createSlidesByURL(arrUrl) {
    return arrUrl.map((url, key) => {
        const
            divElem = document.createElement('div'),
            imgElem = document.createElement('img');

        imgElem.setAttribute('src', url);
        imgElem.classList.add(CLASS_SLIDE_ITEM);

        if (key === 0) {
            divElem.classList.add(CLASS_SLIDE);
        } else {
            divElem.classList.add(CLASS_SLIDE, CLASS_HIDDEN);
        }

        divElem.appendChild(imgElem);

        return divElem;
    });
}

export function createSlidesFromChildren(nodes) {
    return Array.prototype.map.call(nodes, (node, key) => {
        const divElem = document.createElement('div');

        node.classList.add(CLASS_SLIDE_ITEM);

        if (key === 0) {
            divElem.classList.add(CLASS_SLIDE);
        } else {
            divElem.classList.add(CLASS_SLIDE, CLASS_HIDDEN);
        }

        divElem.appendChild(node);

        return divElem
    });
}
