"use strict";

/*===================================
        MORE CONTACT TOGGLE
===================================*/

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});

/*===================================
        NAVBAR TOGGLE
===================================*/

const navBtn = document.querySelector("[data-nav-btn]");
const navbar = document.querySelector("[data-navbar]");

navBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  navBtn.classList.toggle("active");
});

//==================================
// SELECT ELEMENTS
//==================================

const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

//==================================
// NAVIGATION
//==================================

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const pageName = link.textContent.trim().toLowerCase();

    pages.forEach((page) => {
      page.classList.toggle("active", page.dataset.page === pageName);
    });

    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");

    // Close mobile menu
    if (window.innerWidth <= 1080) {
      navbar.classList.remove("active");

      navBtn.classList.remove("active");
    }
  });
});
