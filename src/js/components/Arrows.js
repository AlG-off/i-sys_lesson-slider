import {
    CLASS_ARROW_RIGHT,
    CLASS_ARROW_LEFT
} from '../constants/classNames';

/*
 [
     {
         direction: 'left',
         listener: function()
     },
     {
         direction: 'right',
         listener: function()
     }
 ]
 */

export default function Arrows(dataArr) {
    return dataArr.map(item => {
        const {direction, listener} = item;

        return Arrow(direction, listener);
    })
}

function Arrow(direction, listener) {
    const
        arrow = document.createElement('button'),
        classes = direction === 'left' ? CLASS_ARROW_LEFT : CLASS_ARROW_RIGHT;

    arrow.classList.add(classes);
    arrow.addEventListener('click', listener, false);

    return arrow;
}