import {
    CLASS_SLIDER,
} from '../constants/classNames';

export default function Container() {
    const container = document.createElement('div');

    container.classList.add(CLASS_SLIDER);

    return container;
}