import elementsBuilder from '../elementsBuilder';
import * as action from '../actions/actions';



export default class Slider {
    constructor(rootContainerId) {
        this.rootContainer = document.getElementById(rootContainerId);
        this._currentSlide = 0;
    }

    create = options => {
        const
            container = elementsBuilder(action.createContainer()),
            childrenElem = this.rootContainer.children,
            arrowLeft = document.createElement('button'),
            arrowRight = document.createElement('button');

        let navigation = null;

        if (arrUrl && arrUrl.length) {
            this._slides = createSlidesByURL(arrUrl);
            navigation = createBreadcrumbs(arrUrl.length)
        } else {
            this._slides = createSlidesFromChildren(childrenElem);
            navigation = createBreadcrumbs(childrenElem.length)
        }

        this._breadcrumbs = navigation.children;

        arrowLeft.classList.add(CLASS_ARROW_LEFT);
        arrowRight.classList.add(CLASS_ARROW_RIGHT);

        arrowLeft.addEventListener('click', this.prevSlide, false);
        arrowRight.addEventListener('click', this.nextSlide, false);
        navigation.addEventListener('click', this.selectSlide, false);


        container.append(...this._slides, navigation, arrowLeft, arrowRight);

        this.rootContainer.appendChild(container);
    };

/*    prevSlide = event => {
        event.preventDefault();

        this._slides[this._currentSlide].classList.add(CLASS_HIDDEN);
        this._breadcrumbs[this._currentSlide].classList.remove(CLASS_BREADCRUMBS_ITEM_ACTIVE);
        this._currentSlide--;

        if (this._currentSlide < 0) {
            this._currentSlide = this._slides.length - 1
        }

        this._slides[this._currentSlide].classList.remove(CLASS_HIDDEN);
        this._breadcrumbs[this._currentSlide].classList.add(CLASS_BREADCRUMBS_ITEM_ACTIVE);
    };

    nextSlide = event => {
        event.preventDefault();

        this._slides[this._currentSlide].classList.add(CLASS_HIDDEN);
        this._breadcrumbs[this._currentSlide].classList.remove(CLASS_BREADCRUMBS_ITEM_ACTIVE);
        this._currentSlide++;

        if (this._currentSlide > this._slides.length - 1) {
            this._currentSlide = 0
        }

        this._slides[this._currentSlide].classList.remove(CLASS_HIDDEN);
        this._breadcrumbs[this._currentSlide].classList.add(CLASS_BREADCRUMBS_ITEM_ACTIVE);
    };

    selectSlide = event => {
        event.preventDefault();
        const numTargetElem = event.target.dataset.key;
        console.log('click', numTargetElem);
        if( isNaN(numTargetElem) ) return;

        this._breadcrumbs[this._currentSlide].classList.remove(CLASS_BREADCRUMBS_ITEM_ACTIVE);
        this._slides[this._currentSlide].classList.add(CLASS_HIDDEN);

        this._currentSlide = numTargetElem;

        this._breadcrumbs[this._currentSlide].classList.add(CLASS_BREADCRUMBS_ITEM_ACTIVE);
        this._slides[this._currentSlide].classList.remove(CLASS_HIDDEN);
    }*/
}