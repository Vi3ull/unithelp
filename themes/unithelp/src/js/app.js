import Alpine from 'alpinejs';
import Swiper, {Autoplay, EffectCreative} from 'swiper';

const swiper = new Swiper(".swiper", {
  modules: [Autoplay, EffectCreative],
  autoplay: {
    delay: 5000,
  },
  speed: 700,
  loop: true,
  slidesPerView: "auto",
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
});

window.Alpine = Alpine;
Alpine.start();