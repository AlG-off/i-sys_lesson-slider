import {
    CLASS_ARROW_RIGHT,
    CLASS_ARROW_LEFT
} from '../constants/classNames';

export default function arrows(dataArr) {
    return dataArr.map(item => {
        const {direction, listener} = item;

        return arrow(direction, listener);
    })
}

function arrow(direction, listener) {
    const
        arrow = document.createElement('button'),
        classes = direction === 'left' ? CLASS_ARROW_LEFT : CLASS_ARROW_RIGHT;

    arrow.classList.add(classes);
    arrow.addEventListener('click', listener, false);

    return arrow;
}