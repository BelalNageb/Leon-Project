let myLinks = document.querySelector(".links");
let myUl = document.querySelector(".links ul");
let mySecondSpan = document.querySelector(".links .icon span:nth-child(2)");
let myIcon = document.querySelector(".icon");

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
