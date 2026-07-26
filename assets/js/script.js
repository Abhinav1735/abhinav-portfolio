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
