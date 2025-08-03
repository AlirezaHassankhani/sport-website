import "./style.css";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const sports = new Swiper(".sports", {
  modules: [Navigation, Pagination, Autoplay],
  autoplay: {
    delay: 4000,
  },
  loop: true,
  pagination: {
    el: ".custom-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".stoprt-slide-prev",
    nextEl: ".stoprt-slide-next",
  },
});

const products = new Swiper(".products", {
  modules: [Navigation, Autoplay],
  loop: true,
  autoplay: {
    delay: 40000
  },

  spaceBetween: 24,

  slidesPerView: 1,

  navigation: {
    prevEl: ".product-slide-prev",
    nextEl: ".product-slide-next",
  },

  breakpoints: {
    600: {
      slidesPerView: 2
    },
    800: {
      slidesPerView: 3
    },
    1000: {
      slidesPerView: 4
    }

  }

})
