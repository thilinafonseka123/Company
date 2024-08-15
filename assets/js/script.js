'use strict';



/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navToggler = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);



/**
 * close navbar when click on any navbar links
 */

const navLinks = document.querySelectorAll("[data-nav-link]");

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down
 */

const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 100 ? header.classList.add("active")
    : header.classList.remove("active");
}

addEventOnElem(window, "scroll", headerActive);



/**
 * accordion toggle
 */

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () { this.classList.toggle("active"); }

addEventOnElem(accordionAction, "click", toggleAccordion);





document.addEventListener('DOMContentLoaded', function () {
  const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
  };

  ScrollReveal().reveal(".skill__btn", {
    ...scrollRevealOption,
    delay: 1500,
  });

  ScrollReveal().reveal(".skill__card", {
    duration: 1000,
    interval: 500,
    delay: 2000,
  });
});





document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      420:{
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });
});