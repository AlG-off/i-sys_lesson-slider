import {createSlidesByURL, createSlidesFromChildren} from './SlideCreator';
import {
    CLASS_SLIDER,
    CLASS_ARROW_LEFT,
    CLASS_ARROW_RIGHT,
    CLASS_HIDDEN
} from './constants';

export default class SliderConstructor {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this._currentSlide = 0;
        this._slides = null;
    }

    create = arrUrl => {
        const
            slider = document.createElement('div'),
            childrenElem = this.container.children,
            arrowLeft = document.createElement('button'),
            arrowRight = document.createElement('button');

        if (arrUrl && arrUrl.length) {
            this._slides = createSlidesByURL(arrUrl);
        } else {
            this._slides = createSlidesFromChildren(childrenElem)
        }

        arrowLeft.classList.add(CLASS_ARROW_LEFT);
        arrowLeft.addEventListener('click', this.prevSlide, false);
        arrowRight.classList.add(CLASS_ARROW_RIGHT);
        arrowRight.addEventListener('click', this.nextSlide, false);

        slider.classList.add(CLASS_SLIDER);
        slider.append(...this._slides, arrowLeft, arrowRight);

        this.container.appendChild(slider);
    };

    prevSlide = event => {
        event.preventDefault();

        this._slides[this._currentSlide].classList.add(CLASS_HIDDEN);
        this._currentSlide--;

        if (this._currentSlide < 0) {
            this._currentSlide = this._slides.length - 1
        }

        this._slides[this._currentSlide].classList.remove(CLASS_HIDDEN);
    };

    nextSlide = event => {
        event.preventDefault();

        this._slides[this._currentSlide].classList.add(CLASS_HIDDEN);
        this._currentSlide++;

        if (this._currentSlide > this._slides.length - 1) {
            this._currentSlide = 0
        }

        this._slides[this._currentSlide].classList.remove(CLASS_HIDDEN);
    };
}