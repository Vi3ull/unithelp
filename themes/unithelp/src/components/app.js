import Alpine from 'alpinejs';

Alpine.data('dropdown', () => ({
  open: false,

  toggle(e) {
    e.preventDefault();
    this.open = ! this.open
  },
}))

window.Alpine = Alpine;
Alpine.start();


import { Autoplay, Pagination, EffectCreative } from "swiper";
import initInView from './utils/initInView/_';

const options = {
  modules: [Autoplay],
  loop: true,
  slidesPerView: "auto",
  speed: 700,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  wrapperClass: "js-carousel-wrapper",
  slideClass: "js-carousel-slide",
  slideActiveClass: "carousel-slide-active",
  slideNextClass: "carousel-slide-next",
  slidePrevClass: "carousel-slide-prev",
  pagination: {
    el: ".carousel__pagination",
    clickable: true,
    bulletActiveClass: "carousel__pagination-bullet--state--active",
    bulletClass: "carousel__pagination-bullet",
    bulletElement: "li",
  },
}; 


document.querySelectorAll( '.js-carousel' ).forEach( $el => {
  if (document.querySelectorAll( '.js-carousel' )) {
    initInView( $el, () => {
      import(
        './carousel/_.js' /* webpackChunkName: "/js/carousel" */
      ).then( module => {
        const initCarousel = module.default;
        initCarousel( $el, {
          ...options,
          modules: [Autoplay, EffectCreative],
          effect: 'creative',
          creativeEffect: {
            prev: {
              translate: ["calc(100% + 60px)", 130, 0],
              opacity: 0,
            },
            next: {
              translate: ["calc(100% + 60px)", 130, 0],
              opacity: 1, 
            },
          },
        } )
      });
    });
  }
});