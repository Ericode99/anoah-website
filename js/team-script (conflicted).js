"use strict";

// MENU FUNCTIONALITY

const btnNav = document.querySelector(".btn-nav");
const headerEl = document.querySelector(".header");

btnNav.addEventListener("click", function () {
  console.log("click");
  headerEl.classList.toggle("nav-open");
});

/////////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  const href = link.getAttribute("href");
  if (href.startsWith("#")) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      // Scroll back to top
      if (href === "#")
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });

      // Scroll to other links
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  }
});

///////////////////////////////////////////////////////////////////////////
// Team members functionality

const noah = document.querySelector(".modal-noah");
const tobi = document.querySelector(".modal-noah");
const yannis = document.querySelector(".modal-noah");
const max = document.querySelector(".modal-noah");
const linus = document.querySelector(".modal-noah");
const yanis = document.querySelector(".modal-noah");
const noah = document.querySelector(".modal-noah");
const noah = document.querySelector(".modal-noah");
const noah = document.querySelector(".modal-noah");
const noah = document.querySelector(".modal-noah");
const noah = document.querySelector(".modal-noah");
const noah = document.querySelector(".modal-noah");
