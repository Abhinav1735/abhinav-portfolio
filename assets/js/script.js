"use strict";

/*===================================
        MORE CONTACT TOGGLE
===================================*/

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

/*===================================
        NAVBAR TOGGLE
===================================*/

const navBtn = document.querySelector("[data-nav-btn]");
const navbar = document.querySelector("[data-navbar]");

navBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  navBtn.classList.toggle("active");
});

/*===================================
        SELECT ELEMENTS
===================================*/

const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

/*===================================
        SKILLS ANIMATION
===================================*/

function animateSkills() {
  const progressBars = document.querySelectorAll(".progress-bar");

  progressBars.forEach((bar) => {
    const width = bar.dataset.width;

    // Reset animation
    bar.style.width = "0";

    // Animate
    setTimeout(() => {
      bar.style.width = width;
    }, 100);
  });
}

/*===================================
        NAVIGATION
===================================*/

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const pageName = link.textContent.trim().toLowerCase();

    // Switch Pages
    pages.forEach((page) => {
      page.classList.toggle("active", page.dataset.page === pageName);
    });

    // Active Nav Button
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");

    // Animate Skills Page
    if (pageName === "skills") {
      animateSkills();
    }

    // Close Mobile Navbar
    if (window.innerWidth <= 1080) {
      navbar.classList.remove("active");
      navBtn.classList.remove("active");
    }
  });
});

/*===================================
        PROJECT FILTER
===================================*/

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    projectCards.forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

/*===================================
        INITIAL LOAD
===================================*/

// If Skills page is the first page (or refreshed on it)
const activePage = document.querySelector("[data-page].active");

if (activePage && activePage.dataset.page === "skills") {
  animateSkills();
}
