const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelector(".nav-links");
const body = document.querySelector("body");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navLink.classList.toggle("active");
}

const navLi = document.querySelectorAll(".nav-li");

navLi.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navLink.classList.remove("active");
}

hamburger.addEventListener("click", () => {
    navLink.classList.toggle("nav-active");
    body.classList.toggle("noScroll")
});