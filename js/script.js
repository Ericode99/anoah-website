"use strict";

/////////////////////////////////////////////////////////////
// COOKIE NOTICE

const cookieContainer = document.querySelector(".cookie-container");
const cookieBtn = document.querySelector(".cookie-btn");

cookieBtn.addEventListener("click", () => {
  cookieContainer.classList.remove("active");
  localStorage.setItem("cookieBannerDisplayed", "true");
});

setTimeout(() => {
  if (!localStorage.getItem("cookieBannerDisplayed")) {
    cookieContainer.classList.add("active");
  }
}, 2000);

/////////////////////////////////////////////////////////////
// SET CURRENT YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/////////////////////////////////////////////////////////////
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

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0.3,
    rootMargin: "",
  }
);
obs.observe(sectionHeroEl);

//////////////////////////////////////////////////////////////////
// Mail Chimp form functionallity
(function ($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = "EMAIL";
  ftypes[0] = "email";
  fnames[1] = "FNAME";
  ftypes[1] = "text";
  fnames[2] = "LNAME";
  ftypes[2] = "text";
  fnames[3] = "ADDRESS";
  ftypes[3] = "address";
  fnames[4] = "PHONE";
  ftypes[4] = "phone";
  fnames[5] = "BIRTHDAY";
  ftypes[5] = "birthday";
  /*
   * Translated default messages for the $ validation plugin.
   * Locale: DE
   */
  $.extend($.validator.messages, {
    required: "Dieses Feld ist ein Pflichtfeld.",
    maxlength: $.validator.format("Geben Sie bitte maximal {0} Zeichen ein."),
    minlength: $.validator.format(
      "Geben Sie bitte mindestens {0} Zeichen ein."
    ),
    rangelength: $.validator.format(
      "Geben Sie bitte mindestens {0} und maximal {1} Zeichen ein."
    ),
    email: "Geben Sie bitte eine gültige E-Mail Adresse ein.",
    url: "Geben Sie bitte eine gültige URL ein.",
    date: "Bitte geben Sie ein gültiges Datum ein.",
    number: "Geben Sie bitte eine Nummer ein.",
    digits: "Geben Sie bitte nur Ziffern ein.",
    equalTo: "Bitte denselben Wert wiederholen.",
    range: $.validator.format(
      "Geben Sie bitten einen Wert zwischen {0} und {1}."
    ),
    max: $.validator.format(
      "Geben Sie bitte einen Wert kleiner oder gleich {0} ein."
    ),
    min: $.validator.format(
      "Geben Sie bitte einen Wert größer oder gleich {0} ein."
    ),
    creditcard: "Geben Sie bitte ein gültige Kreditkarten-Nummer ein.",
  });
})(jQuery);
var $mcj = jQuery.noConflict(true);
