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
    renderBullet: function(index, classList) {
        console.log(classList)
        return `<span class="${classList}"></span>`
    }
  },
  navigation: {
    prevEl: ".stoprt-slide-prev",
    nextEl: ".stoprt-slide-next",
  },
});
