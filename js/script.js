const nav = document.querySelector(".main-nav");
const btnMobileNav = document.querySelector(".btn-mobile-nav");

btnMobileNav.addEventListener("click", () => nav.classList.toggle("nav-open"));