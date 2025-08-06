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
          delay: 3200
        },
        scrollbar: {
          el: slider.nextElementSibling,
          draggable: true
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
}
