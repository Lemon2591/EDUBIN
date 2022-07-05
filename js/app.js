const menuMobileIconOpen = document.getElementById("header-menu-mobile-open");
const menuMobileIconClose = document.getElementById("header-menu-mobile-close");
menuMobileIconClose.style.display = "none";
const navMobile = document.getElementById("header-mobile");
const scrollHeader = document.getElementById("header-under");
const removeHeaderTop = document.getElementById("header-top");

menuMobileIconOpen.addEventListener("click", () => {
  menuMobileIconOpen.style.display = "none";
  menuMobileIconClose.style.display = "block";
  navMobile.classList.add("open-nav-menu");
  navMobile.classList.remove("close-nav-menu");
});

menuMobileIconClose.addEventListener("click", () => {
  menuMobileIconOpen.style.display = "block";
  menuMobileIconClose.style.display = "none";
  navMobile.classList.remove("open-nav-menu");
  navMobile.classList.add("close-nav-menu");
});

window.addEventListener("scroll", () => {
  const scrollLenght = window.scrollY;
  if (scrollLenght >= 135) {
    removeHeaderTop.style.display = "none";
    scrollHeader.classList.add("header-scroll");
  } else {
    if (scrollLenght < 135) {
      scrollHeader.classList.remove("header-scroll");
      removeHeaderTop.style.display = "block";
    }
  }
});

const sliderImgFirst = document.getElementById("slider-img1");
const sliderImgSecond = document.getElementById("slider-img2");
const nextBtnSlide = document.getElementById("next-slide");
const prePreSlide = document.getElementById("pre-slide");
const fadeFake1 = document.getElementById("bg-fake-fade1");
const fadeFake2 = document.getElementById("bg-fake-fade2");

sliderImgSecond.style.display = "none";

nextBtnSlide.addEventListener("click", () => {
  sliderImgSecond.classList.toggle("active-slider");
  sliderImgFirst.classList.toggle("active-remove");
  fadeFake1.classList.add("bg-fake-fade");
  setTimeout(() => {
    fadeFake1.classList.remove("bg-fake-fade");
  }, 1000);
  fadeFake2.classList.add("bg-fake-fade");
  setTimeout(() => {
    fadeFake2.classList.remove("bg-fake-fade");
  }, 1000);
});

prePreSlide.addEventListener("click", () => {
  sliderImgSecond.classList.toggle("active-slider");
  sliderImgFirst.classList.toggle("active-remove");
  fadeFake1.classList.add("bg-fake-fade");
  setTimeout(() => {
    fadeFake1.classList.remove("bg-fake-fade");
  }, 1000);
  fadeFake2.classList.add("bg-fake-fade");
  setTimeout(() => {
    fadeFake2.classList.remove("bg-fake-fade");
  }, 1000);
});

$(document).ready(function () {
  $(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow:
      "<button type='button' class='custom-slick-pre'><i class='ti-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='custom-slick-next'><i class='ti-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
