"use strict";

//Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

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

// MODAL SELECTORS
const modalNoah = document.querySelector(".modal-noah");
const modalTobi = document.querySelector(".modal-tobi");
const modalYannis = document.querySelector(".modal-yannis");
const modalMax = document.querySelector(".modal-max");
const modalLinus = document.querySelector(".modal-linus");
const modalYanis = document.querySelector(".modal-yanis");
const modalMarlon = document.querySelector(".modal-marlon");
const modalBela = document.querySelector(".modal-bela");
const modalTim = document.querySelector(".modal-tim");
const modalFarah = document.querySelector(".modal-farah");
const modalElia = document.querySelector(".modal-elia");

// BUTTON SELECTORS
const btnNoah = document.querySelector(".noah");
const btnTobi = document.querySelector(".tobi");
const btnYannis = document.querySelector(".yannis");
const btnMax = document.querySelector(".max");
const btnLinus = document.querySelector(".linus");
const btnYanis = document.querySelector(".yanis");
const btnMarlon = document.querySelector(".marlon");
const btnBela = document.querySelector(".bela");
const btnTim = document.querySelector(".tim");
const btnFarah = document.querySelector(".farah");
const btnElia = document.querySelector(".elia");

const overlay = document.querySelector(".overlay");
const btnsCloseModal = document.querySelectorAll(".close-modal");
const htmlEl = document.querySelector(".html");

// FUNCTIONS
let activeModal;

// Opening modals
function openModal(name) {
  name.classList.remove("hidden");
  overlay.classList.remove("hidden");
  htmlEl.classList.add("scroll-lock");
  activeModal = name;
}

// Closing modals
function closeModal() {
  activeModal.classList.add("hidden");
  overlay.classList.add("hidden");
  htmlEl.classList.remove("scroll-lock");
}

// EVENTS

// Opening Modals
btnNoah.addEventListener("click", function () {
  openModal(modalNoah);
});
btnTobi.addEventListener("click", function () {
  openModal(modalTobi);
});
btnYannis.addEventListener("click", function () {
  openModal(modalYannis);
});
btnMax.addEventListener("click", function () {
  openModal(modalMax);
});
btnLinus.addEventListener("click", function () {
  openModal(modalLinus);
});
btnYanis.addEventListener("click", function () {
  openModal(modalYanis);
});
btnMarlon.addEventListener("click", function () {
  openModal(modalMarlon);
});
btnBela.addEventListener("click", function () {
  openModal(modalBela);
});
btnTim.addEventListener("click", function () {
  openModal(modalTim);
});
btnFarah.addEventListener("click", function () {
  openModal(modalFarah);
});
btnElia.addEventListener("click", function () {
  openModal(modalElia);
});

// Closing modals
btnsCloseModal.forEach((btn) =>
  btn.addEventListener("click", function () {
    closeModal();
  })
);

overlay.addEventListener("click", function () {
  closeModal();
});
