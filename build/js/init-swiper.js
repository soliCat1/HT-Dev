import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";
const advantages = document.querySelector(".swiper--advantages");
const benefits = document.querySelector(".swiper--benefits");
const startWindowWidth = document.body.clientWidth;
let swiperActive = false,
  advantagesSwiper,
  benefitsSwiper;

const setSwiperState = (windowWidth) => {
  if (windowWidth < 1020 && !swiperActive) {
    if (advantages) {
      advantagesSwiper = new Swiper(".swiper--advantages", {
        direction: "horizontal",
        loop: true,
        navigation: {
          nextEl: ".advantages__btn.slider__button--next",
          prevEl: ".advantages__btn.slider__button--prev",
        },
        pagination: {
          el: ".slider__pagination.advantages__pagination",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
        },
      });
    }
    if (benefits) {
      benefitsSwiper = new Swiper(".swiper--benefits", {
        direction: "horizontal",
        loop: true,
        navigation: {
          nextEl: ".benefits__btn.slider__button--next",
          prevEl: ".benefits__btn.slider__button--prev",
        },
        pagination: {
          el: ".slider__pagination.benefits__pagination",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
        },
      });
    }
    swiperActive = true;
  } else if (windowWidth >= 1020 && swiperActive) {
    advantagesSwiper.destroy();
    benefitsSwiper.destroy();
    swiperActive = false;
  }
};

const windowResizeHandler = () => {
  const windowWidth = document.body.clientWidth;
  setSwiperState(windowWidth);
}

const initSwiper = () => {
  setSwiperState(startWindowWidth);
  window.addEventListener("resize", windowResizeHandler);
};

export { initSwiper };
