/* =========================================
   PCVERSE
   JavaScript
========================================= */


/* =========================================
   MOBILE MENU
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-open");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {
        navLinks.classList.remove("mobile-open");
    });

});


/* =========================================
   NEWSLETTER
========================================= */

const newsletterForm = document.getElementById("newsletterForm");
const emailInput = document.getElementById("email");
const formMessage = document.getElementById("formMessage");

newsletterForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = emailInput.value.trim();

    if (!email) {
        formMessage.textContent = "PLEASE ENTER YOUR EMAIL.";
        return;
    }

    if (!email.includes("@")) {
        formMessage.textContent = "PLEASE ENTER A VALID EMAIL.";
        return;
    }

    formMessage.textContent =
        "WELCOME TO PCVERSE. YOU'RE ON THE LIST!";

    emailInput.value = "";

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".article-card, .spec-board, .category, .about-content"
);

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================
   PARALLAX HERO
========================================= */

const heroVisual = document.querySelector(".hero-visual");

window.addEventListener("mousemove", event => {

    if (window.innerWidth < 900) return;

    const x = (event.clientX / window.innerWidth - 0.5);
    const y = (event.clientY / window.innerHeight - 0.5);

    heroVisual.style.transform =
        `translate(${x * 15}px, ${y * 15}px)`;

});


/* =========================================
   CURRENT YEAR
========================================= */

const footerYear = document.querySelector(".footer-bottom span");

if (footerYear) {

    footerYear.textContent =
        `© ${new Date().getFullYear()} PCVERSE`;

}