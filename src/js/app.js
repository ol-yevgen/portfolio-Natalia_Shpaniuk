import * as myFunction from "./modules/function.js";
import * as typed from "./modules/typedText.js";
import * as scroll from "./modules/scrollToSection.js";
import * as burger from "./modules/burger.js";
import * as hover from "./modules/hover.js";
import * as toTop from "./modules/scrollToTop.js";
import * as lang from "./modules/siteLang.js";
import * as linkAnimation from "./modules/linkAnimation.js";
import * as moveAnimation from "./modules/moveAnimation.js";

document.addEventListener("DOMContentLoaded", () => {
    myFunction.isWebp();
    typed.typedText();
    scroll.sctollToSection();
    burger.burger();
    hover.hoverEffect();
    toTop.toTopArrow();
    lang.siteLang();
    linkAnimation.linkAnimation();
    moveAnimation.moveAnimation();
})

import Swiper, { Lazy, Navigation, Pagination } from "swiper";

new Swiper(".image-slider", {
    modules: [Navigation, Pagination, Lazy],

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        // dynamicBullets: true,
    },

    // grabCursor: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
        eventsTarget: ".image-slider",
    },

    watchOverflow: true,

    // slidesPerView: 3,

    spaceBetween: 10,

    loop: true,

    speed: 300,

    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    },

    preloadImages: false,

    lazy: {
        loadOnTransitionStart: false,

        loadPrevNext: true,
    },

    watchSlidesProgress: true,

    watchSlidesVisibility: true,
});
