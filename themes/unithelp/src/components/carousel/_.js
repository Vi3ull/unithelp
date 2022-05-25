import Swiper from "swiper";
import throttle from "@c/utils/throttle/_";

export default function initCarousel($carousel, options) {
  const init = () => {
    $carousel.classList.add("carousel--inited");
    const slidesPerView = window.getComputedStyle($carousel, null).getPropertyValue("--carouselSlidesCount");
    const $pagination = $carousel.querySelector(".carousel__pagination");

    if (slidesPerView != "auto") options.slidesPerView = slidesPerView;
    if ($pagination) options.pagination.el = $pagination;

    const carousel = new Swiper($carousel, options);    
  }

  init();
  
  const optimizedHandler = throttle(init, 250);
  window.addEventListener("resize", optimizedHandler)
};



