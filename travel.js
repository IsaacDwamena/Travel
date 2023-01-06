// mobile menu

const Tabs = document.querySelector(".tabs");
const mobileToggle = document.querySelector(".mobile-toggle");

mobileToggle.addEventListener("click", () => {
  Tabs.classList.toggle("active");
  mobileToggle.classList.toggle("active");
});

document.querySelectorAll(".tabs").forEach((n) =>
  n.addEventListener("click", () => {
    Tabs.classList.remove("active");
    mobileToggle.classList.remove("active");
  })
);

// Destination Section filter

$(document).ready(function () {
  $(".list").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "all") {
      $(".country").show("1000");
    } else {
      $(".country")
        .not("." + value)
        .hide("1000");
      $(".country")
        .filter("." + value)
        .show("1000");
    }
  });

  // add active class on selected list
  $(".list").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
});

// Initializing Swiper

// 1st carousel
var swiper1 = new Swiper(".mySwiper1", {
  slidesPerView: 2,
  spaceBetween: 40,
  slidesPerGroup: 1,
  centeredSlides: true,
  loop: true,
  loopFillGroupWithBlank: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: "#swiper-button-next-1",
    prevEl: "#swiper-button-prev-1",
  },
  breakpoints: {
    850: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    100: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
});

// 2nd carousel
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  navigation: {
    nextEl: "#swiper-button-next-2",
    prevEl: "#swiper-button-prev-2",
  },
});

// Animation
// Home Section
gsap.registerPlugin(ScrollTrigger);

gsap.defaults({
  ease: "power2.in",
  duration: 0.75,
});
gsap.fromTo(".socials", { opacity: 0, y: -50 }, { opacity: 1, y: 0 });
gsap.fromTo(".showcase", { opacity: 0, x: -200 }, { opacity: 1, x: 0 });

const tl = gsap.timeline({ defaults: { duration: 0.5, ease: "power2.out" } });

tl.from(".city-1", { opacity: 0 });
tl.from(".city-2", { opacity: 0 }, "<50%");
tl.from(".city-3", { opacity: 0 }, "<50%");

gsap.fromTo(
  "#outer-circle",
  { scale: 0.78, transformOrigin: "50% 50%" },
  {
    scale: 1,
    duration: 0.8,
    yoyo: true,
    repeat: -1,
    ease: "slow(0.3, 0.4, false)",
  }
);

// About Section
gsap.fromTo(
  ".column-1",
  { opacity: 0, x: -200 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: "#about-us",
      toggleActions: "restart none restart none",
    },
    ease: "elastic.out(1, 0.75)",
  }
);
gsap.fromTo(
  ".column-2",
  { opacity: 0, x: 200 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: "#about-us",
      toggleActions: "restart none restart none",
    },
    ease: "elastic.out(1, 0.75)",
  }
);

// Service Section
gsap.fromTo(
  "#services",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#services",
      toggleActions: "restart none restart none",
    },
  }
);

// Destination Section
gsap.fromTo(
  "#destinations",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#destinations",
      toggleActions: "restart none restart none",
    },
  }
);

// News Letter Section
gsap.fromTo(
  ".news-info",
  { opacity: 0, x: -200 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".news-letter",
      toggleActions: "restart none restart none",
    },
    ease: "elastic.out(1, 0.75)",
  }
);
gsap.fromTo(
  ".email-input",
  { opacity: 0, x: 200 },
  {
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".news-letter",
      toggleActions: "restart none restart none",
    },
    ease: "elastic.out(1, 0.75)",
  }
);

// Tour Section
gsap.fromTo(
  "#tours",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#tours",
      toggleActions: "restart none restart none",
    },
  }
);

// Contact Section
gsap.fromTo(
  "#contact",
  { opacity: 0, y: 100 },
  {
    opacity: 1,
    y: 0,
    scrollTrigger: {
      trigger: "#contact",
      toggleActions: "restart none restart none",
    },
  }
);
