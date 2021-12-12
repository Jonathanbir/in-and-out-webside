let menu = document.querySelector("#menu-hamburger");
let navigation = document.querySelector(".navigation");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navigation.classList.toggle("active");
};

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navigation a");

window.onscroll = () => {
  menu.classList.remove("fa-times");
  navigation.classList.remove("active");

  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header .navigation a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

$(document).ready(function () {
  $("#home").click(function () {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".home").offset().top }, 100);
  });
  $("#meal").click(function () {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".meal").offset().top }, 100);
  });
  $("#history").click(function () {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".history").offset().top }, 100);
  });
  $("#merchandise").click(function () {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".merchandise").offset().top }, 100);
  });
  $("#location").click(function () {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".location").offset().top }, 100);
  });
  $("#order").click(function () {
    $("html,body")
      .stop()
      .animate({ scrollTop: $(".order").offset().top }, 100);
  });

  $(window).on("mousewheel", function (e) {
    console.log(e.delta);
    if (e.delta == 10) {
      $("html,body")
        .stop()
        .animate({ scrollTop: $(".box-3").offset().top }, 100);
    }
  });
});

document.querySelector("#search-icon").onclick = () => {
  document.querySelector("#search-content").classList.toggle("active");
};

document.querySelector("#close").onclick = () => {
  document.querySelector("#search-content").classList.remove("active");
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 180,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".location-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut;
