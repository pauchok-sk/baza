export default function sliders() {
  const partnersSlider = document.querySelector(".s-partners__slider");

  if (partnersSlider) {
    const swiper = new Swiper(partnersSlider, {
      speed: 900,
      spaceBetween: 32,
      slidesPerView: "auto",
      autoplay: {
        delay: 3500,
      },
      breakpoints: {
        1366: {
          spaceBetween: 85,
          slidesPerView: 5,
        },
        1200: {
          spaceBetween: 45,
          slidesPerView: 5,
        },
      },
    });
  }

  const portfolioSliders = document.querySelectorAll(".s-portfolio__slider");

  if (portfolioSliders.length) {
    portfolioSliders.forEach((slider) => {
      const swiper = new Swiper(slider, {
        speed: 800,
        slidesPerView: 1,
        spaceBetween: 24,
        autoplay: {
          delay: 3200,
        },
        scrollbar: {
          el: slider.nextElementSibling,
          draggable: true,
        },
        breakpoints: {
          992: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
          645: {
            slidesPerView: 2,
            spaceBetween: 24,
          },
        },
      });
    });
  }

  const clientsSlider = document.querySelector(".s-clients__slider");

  if (clientsSlider) {
    const swiper = new Swiper(clientsSlider, {
      speed: 900,
      spaceBetween: 24,
      slidesPerView: 1,
      autoplay: {
        delay: 3000,
      },
      navigation: {
        prevEl: ".s-clients .slider-nav__btn._prev",
        nextEl: ".s-clients .slider-nav__btn._next",
      },
      scrollbar: {
        el: ".s-clients .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        1200: {
          spaceBetween: 24,
          slidesPerView: 3,
        },
        575: {
          spaceBetween: 24,
          slidesPerView: 2,
        },
      },
    });
  }

  const gallerySlider = document.querySelector(".s-gallery__slider");

  if (gallerySlider) {
    const swiper = new Swiper(gallerySlider, {
      speed: 900,
      spaceBetween: 24,
      slidesPerView: 1,
      autoplay: {
        delay: 3500,
      },
      navigation: {
        prevEl: ".s-gallery .slider-nav__btn._prev",
        nextEl: ".s-gallery .slider-nav__btn._next",
      },
      scrollbar: {
        el: ".s-gallery .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        992: {
          spaceBetween: 24,
          slidesPerView: 3,
        },
        576: {
          spaceBetween: 24,
          slidesPerView: 2,
        },
      },
    });
  }

  const reviewsSlider = document.querySelector(".s-reviews__slider");

  if (reviewsSlider) {
    const swiper = new Swiper(reviewsSlider, {
      speed: 900,
      spaceBetween: 24,
      slidesPerView: 1,
      autoplay: {
        delay: 3200,
      },
      navigation: {
        prevEl: ".s-reviews .slider-nav__btn._prev",
        nextEl: ".s-reviews .slider-nav__btn._next",
      },
      scrollbar: {
        el: ".s-reviews .slider-scrollbar",
        draggable: true,
      },
      breakpoints: {
        768: {
          spaceBetween: 30,
          slidesPerView: 2,
        },
      },
    });
  }
}
