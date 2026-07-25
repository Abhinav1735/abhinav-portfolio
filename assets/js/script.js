"use strict";

const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  sidebar.classList.toggle("active");
});
