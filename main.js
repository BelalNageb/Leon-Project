// // manage dynamic navigation behaviors and smooth scrolling functionality across sections of the website
let myLinks = document.querySelector(".links");
let myUl = document.querySelector(".links ul");
let mySecondSpan = document.querySelector(".links .icon span:nth-child(2)");
let myIcon = document.querySelector(".icon");
// Implemented interactive hover effects on the navigation menu icon.
myIcon.addEventListener("mouseleave", function () {
  mySecondSpan.style.width = "60%";
});

myIcon.addEventListener("mouseenter", function () {
  mySecondSpan.style.width = "100%";
});

myLinks.addEventListener("click", function (event) {
  event.stopPropagation();
  if (myUl.style.display === "block") {
    myUl.style.display = "none";
  } else {
    myUl.style.display = "block";
  }
});

document.addEventListener("click", function () {
  myUl.style.display = "none";
});
// Created click event listeners for the main menu links to toggle visibility and provide smooth scrolling to respective sections
let servicesLink = document.querySelector(".services-link");
let portfolioLink = document.querySelector(".portfolio-link");
let aboutLink = document.querySelector(".about-link");
let contactLink = document.querySelector(".contact-link");

servicesLink.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#services").scrollIntoView({
    behavior: "smooth",
  });
});
portfolioLink.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#portfolio").scrollIntoView({
    behavior: "smooth",
  });
});
aboutLink.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#about").scrollIntoView({
    behavior: "smooth",
  });
});
contactLink.addEventListener("click", function (event) {
  event.preventDefault();
  document.querySelector("#contact").scrollIntoView({
    behavior: "smooth",
  });
});
// Integrated a window load event to smoothly scroll to specific sections based on URL hash, ensuring a seamless user experience upon page load or refresh.
window.addEventListener("load", function () {
  if (!window.location.hash) {
    setTimeout(function () {
      window.scrollTo(0, 0);
    }, 0);
  } else {
    setTimeout(function () {
      document.querySelector(window.location.hash)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 0);
  }
});

// The progress bar width updates dynamically as the user scrolls down the page.
window.addEventListener("scroll", () => {
  let scrollElement = document.querySelector(".scroll-progress");
  let height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollTop = window.scrollY;
  scrollElement.style.width = `${(scrollTop / height) * 100}%`;
});

// Added a scroll-to-top button with smooth scrolling functionality and styled it for better user experience.
let scrollUpBotton = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollUpBotton.style.display = "flex";
  } else {
    scrollUpBotton.style.display = "none";
  }
});

scrollUpBotton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
