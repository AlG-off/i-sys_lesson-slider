import store from '../store/Store';
import elementsBuilder from '../elementsBuilder';
import * as action from '../actions/actions';
import * as classes from '../constants/classNames';

export default class Slider {
    constructor(rootContainerId) {
        this.rootContainer = document.getElementById(rootContainerId);
    }

    create(userOptions = {}) {
        store.update(action.setOptions(userOptions));
        const
            noop = [],
            {options} = store.state,
            urls = options.urls.length ? options.urls : noop,
            elemsRootContainer = Array.prototype.slice.call(this.rootContainer.children),
            slidesContent = Array.prototype.concat(urls, elemsRootContainer),
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
            breadcrumbsData = {
                amount: slidesContent.length,
                listener: this.selectSlide
            };

        const
            container = elementsBuilder(action.createMainContainer({listener: this.run})),
            slides = slidesContent.length
                ? elementsBuilder(action.createSlides(slidesContent))
                : elementsBuilder(action.createDataNotFound()),
            breadcrumbs = options.breadcrumbs ? elementsBuilder(action.createBreadcrumbs(breadcrumbsData)) : noop,
            arrows = options.controls ? elementsBuilder(action.createArrows(arrowData)) : noop;

        store.update(action.setSlides(slides));
        store.update(action.setBreadcrumbs(breadcrumbs.children));
        store.subscribe(() => {
            console.log(`currentSlide ${store.state.currentSlide}, prevSlide ${store.state.prevSlide}`)
        });
        store.subscribe(this.displaySlide);

        container.append(...Array.prototype.concat(slides, breadcrumbs, arrows));
        this.rootContainer.appendChild(container);

        this.run();
    };

    prevSlide = event => {
        event && event.preventDefault();

        const
            {currentSlide, slides} = store.state,
            targetSlide = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;

        store.update(action.displaySlide(targetSlide))
    };

    nextSlide = event => {
        event && event.preventDefault();

        const
            {currentSlide, slides} = store.state,
            targetSlide = currentSlide + 1 < slides.length ? currentSlide + 1 : 0;

        store.update(action.displaySlide(targetSlide))
    };

    selectSlide = event => {
        event && event.preventDefault();

        const targetSlide = parseInt(event.target.dataset.key, 10);

        if (isNaN(targetSlide)) return;

        store.update(action.displaySlide(targetSlide))
    };

    displaySlide = () => {
        const {currentSlide, prevSlide, slides, breadcrumbs, options} = store.state;

        if (currentSlide === prevSlide) return;

        let direction = 'right';

        if (options.breadcrumbs) {
            breadcrumbs[prevSlide].classList.remove(classes.CLASS_BREADCRUMBS_ITEM_ACTIVE);
            breadcrumbs[currentSlide].classList.add(classes.CLASS_BREADCRUMBS_ITEM_ACTIVE);
        }

        if (prevSlide > currentSlide && prevSlide - currentSlide !== slides.length - 1 || !prevSlide && currentSlide === slides.length - 1) {
            direction = 'left';
        } else {
            direction = 'right';
        }
        console.log('direction:', direction);
        switch (options.transition) {
            case 'bounceIn':
                if (direction === 'right') {
                    slides[currentSlide].classList.add(classes.CLASS_BOUNCE_IN_RIGHT);
                } else {
                    slides[currentSlide].classList.add(classes.CLASS_BOUNCE_IN_LEFT);
                }

                slides[currentSlide].classList.add(classes.CLASS_SLIDE_VISIBLE, classes.CLASS_BOUNCE_IN_VISIBLE);
                slides[prevSlide].classList.remove(
                    classes.CLASS_BOUNCE_IN_RIGHT,
                    classes.CLASS_BOUNCE_IN_LEFT,
                    classes.CLASS_BOUNCE_IN_VISIBLE
                );

                setTimeout(()=> {slides[prevSlide].classList.remove(classes.CLASS_SLIDE_VISIBLE)}, 500);
                break;
            case 'fadeOut':
                slides[prevSlide].classList.remove(classes.CLASS_SLIDE_VISIBLE);
                slides[currentSlide].classList.add(classes.CLASS_SLIDE_VISIBLE);
                break;
            case 'zoomInOut':
                slides[prevSlide].classList.remove(
                    classes.CLASS_ZOOM_IN_RIGHT,
                    classes.CLASS_ZOOM_IN_LEFT
                );
                slides[currentSlide].classList.add(classes.CLASS_SLIDE_VISIBLE);
                if (direction === 'right') {
                    slides[prevSlide].classList.add(classes.CLASS_ZOOM_OUT_LEFT);
                    slides[currentSlide].classList.add(classes.CLASS_ZOOM_IN_RIGHT);
                } else {
                    slides[prevSlide].classList.add(classes.CLASS_ZOOM_OUT_RIGHT);
                    slides[currentSlide].classList.add(classes.CLASS_ZOOM_IN_LEFT);
                }

                setTimeout(()=> {
                    slides[prevSlide].classList.remove(
                        classes.CLASS_SLIDE_VISIBLE,
                        classes.CLASS_ZOOM_OUT_RIGHT,
                        classes.CLASS_ZOOM_OUT_LEFT,
                    );
                }, 500);
                break;
            case 'none':
            default:
                slides[prevSlide].classList.remove(classes.CLASS_SLIDE_VISIBLE);
                slides[currentSlide].classList.add(classes.CLASS_SLIDE_VISIBLE);
        }

    };

    run = stopEvent => {
        const
            {options: {delay}} = store.state,
            self = this;

        if (!delay) return;

        if (stopEvent === 'stop') {
            const {timer} = store.state;
            clearTimeout(timer);
            store.update(action.setTimer(null));
            return;
        }

        let timerId = setTimeout(function run() {
            timerId = setTimeout(run, delay);
            self.nextSlide();
            store.update(action.setTimer(timerId));
        }, delay);

        store.update(action.setTimer(timerId));
    }
}