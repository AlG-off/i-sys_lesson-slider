import Store from '../store/Store';
import updateState from '../updateState';
import elementsBuilder from '../elementsBuilder';
import * as action from '../actions/actions';

const store = new Store(updateState);

export default class Slider {
    constructor(rootContainerId) {
        this.rootContainer = document.getElementById(rootContainerId);
    }

    create(userOptions = {}) {
        store.update(action.setOptions(userOptions));
        const
            {options} = store.state,
            container = elementsBuilder(action.createMainContainer()),
            slidesContent = Array.prototype.concat(options.urls, this.rootContainer.children),
            arrowData = [
                {
                    direction: 'left',
                    listener: this.prevSlide
                },
                {
                    direction: 'right',
                    listener: this.nextSlide
                }
            ],
            slides = slidesContent.length ?
                elementsBuilder(action.createSlides(slidesContent))
                : elementsBuilder(action.createDataNotFound()),
            breadcrumbs = options.breadcrumbs ? elementsBuilder(action.createBreadcrumbs(slides.length)) : [],
            arrows = options.controls ? elementsBuilder(action.createArrows(arrowData)) : [];

        store.update(action.setSlides(slides));
        store.update(action.setBreadcrumbs());

        container.append(...Array.prototype.concat(slides, breadcrumbs, arrows));
        this.rootContainer.appendChild(container);
    };

    prevSlide = event => {
        event.preventDefault();
        console.log('click');
        /*this._slides[this._currentSlide].classList.add(CLASS_HIDDEN);
         this._breadcrumbs[this._currentSlide].classList.remove(CLASS_BREADCRUMBS_ITEM_ACTIVE);
         this._currentSlide--;

         if (this._currentSlide < 0) {
         this._currentSlide = this._slides.length - 1
         }

         this._slides[this._currentSlide].classList.remove(CLASS_HIDDEN);
         this._breadcrumbs[this._currentSlide].classList.add(CLASS_BREADCRUMBS_ITEM_ACTIVE);*/
    };

    nextSlide = event => {
        event.preventDefault();
        console.log('click');
        /*this._slides[this._currentSlide].classList.add(CLASS_HIDDEN);
         this._breadcrumbs[this._currentSlide].classList.remove(CLASS_BREADCRUMBS_ITEM_ACTIVE);
         this._currentSlide++;

         if (this._currentSlide > this._slides.length - 1) {
         this._currentSlide = 0
         }

         this._slides[this._currentSlide].classList.remove(CLASS_HIDDEN);
         this._breadcrumbs[this._currentSlide].classList.add(CLASS_BREADCRUMBS_ITEM_ACTIVE);*/
    };

    /*    selectSlide = event => {
     event.preventDefault();
     const numTargetElem = event.target.dataset.key;
     console.log('click', numTargetElem);
     if (isNaN(numTargetElem)) return;

     this._breadcrumbs[this._currentSlide].classList.remove(CLASS_BREADCRUMBS_ITEM_ACTIVE);
     this._slides[this._currentSlide].classList.add(CLASS_HIDDEN);

     this._currentSlide = numTargetElem;

     this._breadcrumbs[this._currentSlide].classList.add(CLASS_BREADCRUMBS_ITEM_ACTIVE);
     this._slides[this._currentSlide].classList.remove(CLASS_HIDDEN);
     }*/
}