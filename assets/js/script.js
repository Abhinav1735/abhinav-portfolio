"use strict";

/*===================================
        PRELOADER
===================================*/

window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");

  setTimeout(() => {
    loader.classList.add("hide");
  }, 1000);
});

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
        CONTACT FORM
===================================*/

const contactForm = document.getElementById("contact-form");
const sendBtn = document.getElementById("send-btn");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  sendBtn.disabled = true;

  sendBtn.innerHTML = `
        <ion-icon name="hourglass-outline"></ion-icon>
        Sending...
    `;

  emailjs
    .send("service_s1wawba", "template_0ptvhjc", {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    })

    .then(() => {
      sendBtn.innerHTML = `
            <ion-icon name="checkmark-circle-outline"></ion-icon>
            Message Sent
        `;

      contactForm.reset();

      showToast(
        "success",
        "Message Sent",
        "Thank you! I'll get back to you as soon as possible.",
      );

      setTimeout(() => {
        sendBtn.disabled = false;

        sendBtn.innerHTML = `
                <ion-icon name="send-outline"></ion-icon>
                Send Message
            `;
      }, 2500);
    })

    .catch((error) => {
      console.error(error);

      sendBtn.disabled = false;

      sendBtn.innerHTML = `
            <ion-icon name="alert-circle-outline"></ion-icon>
            Try Again
        `;

      showToast(
        "error",
        "Message Failed",
        "Unable to send your message. Please try again.",
      );
    });
});

/*===================================
            TOAST
===================================*/

const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toast-title");
const toastMessage = document.getElementById("toast-message");
const toastIcon = document.getElementById("toast-icon");

function showToast(type, title, message) {
  toast.classList.remove("error");

  if (type === "success") {
    toastIcon.setAttribute("name", "checkmark-circle");
  } else {
    toast.classList.add("error");

    toastIcon.setAttribute("name", "close-circle");
  }

  toastTitle.textContent = title;

  toastMessage.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

/*===================================
        INITIAL LOAD
===================================*/

// If Skills page is the first page (or refreshed on it)
const activePage = document.querySelector("[data-page].active");

if (activePage && activePage.dataset.page === "skills") {
  animateSkills();
}

/*===================================
        SCROLL TOP
===================================*/

const scrollBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 250) {
    scrollBtn.classList.add("show");
  } else {
    scrollBtn.classList.remove("show");
  }
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,

    behavior: "smooth",
  });
});

/*===================================
        CURSOR GLOW
===================================*/

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
  glow.style.left = e.clientX + "px";

  glow.style.top = e.clientY + "px";
});
