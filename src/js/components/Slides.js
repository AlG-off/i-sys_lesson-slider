import {
    CLASS_SLIDE_ITEM,
    CLASS_SLIDE,
    CLASS_SLIDE_HIDDEN
} from '../constants/classNames';

export default function Slides(dataArr) {
    return Array.prototype.map.call(dataArr, (item, key) => Slide(item, key));
}


function Slide(item, key) {
    const divContainer = document.createElement('div');

    let content = null;

    if (key === 0) {
        divContainer.classList.add(CLASS_SLIDE);
    } else {
        divContainer.classList.add(CLASS_SLIDE, CLASS_SLIDE_HIDDEN);
    }

    divContainer.setAttribute('data-key', key);

    if (item.nodeType) {
        content = item;
    } else {
        content = document.createElement('img');
        content.setAttribute('src', item);
    }

    content.classList.add(CLASS_SLIDE_ITEM);

    divContainer.appendChild(content);

    return divContainer;
}
