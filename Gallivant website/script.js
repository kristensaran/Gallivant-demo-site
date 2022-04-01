// const arrows = document.querySelectorAll(".chevron");
// const menuEl = document.querySelectorAll(".grid");
// const tours = document.getElementsByName("tour-text");

// arrows.addEventListener("click", function () {
//   menuEl.classList.toggle("tours-closed");
// });

// var tourDisplay = document.getElementsByName(".tours-text");
// const tours = document.querySelector(".tours-container");
// const tourText = document.querySelectorAll(".tours-info");

// arrows.forEach((toggle) => {
//   toggle.addEventListener("click", () => {
//     toggle.tourDisplay.classList.classList.toggle("tours-closed");
//   });
// });

// document.querySelectorAll("chevron").onclick = toggleDisplay;

// function toggleDisplay() {
//   tours.classList.toggle("tours-info");
// }

// const toggles = document.querySelectorAll(".chevron");

// const menu = document.querySelectorAll(".tours");

// arrows.forEach((toggle) => {
//   toggle.addEventListener("click", () => {
//     toggle.menu.childNodes.classList.toggle("tours-info");
//   });
// });

var coll = document.getElementsByClassName("tours-continent");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "grid") {
      content.style.display = "none";
    } else {
      content.style.display = "grid";
    }
  });
}

// Slider

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

// Mobile Nav
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    // const href = link.getAttribute("href");
    // if (href === "#")
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    //   if (href !== "#" && href.startsWith("#"))
    //   const sectionEl = document.querySelectorAll(href);
    //   sectionEl.scrollIntoView({behavior: "smooth"});

    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
