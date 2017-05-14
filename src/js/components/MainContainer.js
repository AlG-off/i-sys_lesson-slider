import {
    CLASS_SLIDER,
} from '../constants/classNames';

export default function Container({listener}) {
    const container = document.createElement('div');

    container.classList.add(CLASS_SLIDER);
    container.addEventListener('mouseenter', () => {listener('stop')});
    container.addEventListener('mouseleave', () => {listener()});

    return container;
}