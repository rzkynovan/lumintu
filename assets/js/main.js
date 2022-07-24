// About Slider
var swiper = new Swiper(".about__slider", {
    loop : true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints:{
        568:{
            slidesPerView: 2.5,
        },
        375:{
            slidesPerView: 1,
        }
    },
  });