import {
    CLASS_SLIDE_ITEM,
    CLASS_SLIDE,
    CLASS_SLIDE_VISIBLE,
    CLASS_BOUNCE_IN,
    CLASS_FADE_OUT,
    CLASS_ZOOM_IN_OUT
} from '../constants/classNames';

export default function Slides({dataArr, transition}) {
    return Array.prototype.map.call(dataArr, (item, key) => Slide(item, key, transition));
}


function Slide(item, key, transition) {
    const divContainer = document.createElement('div');

    let
        content = null,
        animationClass = '';

    switch (transition) {
        case 'bounceIn':
            animationClass = CLASS_BOUNCE_IN;
            break;
        case 'fadeOut':
            animationClass = CLASS_FADE_OUT;
            break;
        case 'zoomInOut':
            animationClass = CLASS_ZOOM_IN_OUT;
            break;
        default:
            animationClass = CLASS_SLIDE;
    }

    if (key === 0) {
        divContainer.classList.add(CLASS_SLIDE, CLASS_SLIDE_VISIBLE, animationClass);
    } else {
        divContainer.classList.add(CLASS_SLIDE, animationClass);
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
