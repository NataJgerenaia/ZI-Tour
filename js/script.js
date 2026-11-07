
// =================================
// MOBILE NAVIGATION
// =================================

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector("#site-nav");


if (menuToggle && siteNav) {

    function closeMenu() {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Открыть меню");

        siteNav.classList.remove("is-open");
    }


    // Open and close the menu

    menuToggle.addEventListener("click", () => {

        const isOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        menuToggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Открыть меню" : "Закрыть меню"
        );

        siteNav.classList.toggle("is-open", !isOpen);

    });


    // Close menu after selecting a section

    siteNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", closeMenu);

    });


    // Close menu with Escape key

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

}
// =================================
// HERO BACKGROUND SLIDESHOW
// =================================

const heroImages = [
    "./assets/images/hero-tbilisi.jpg",
    "./assets/images/hero-borjomi.jpg",
    "./assets/images/hero-mtskheta.jpg",
    "./assets/images/hero-kakheti.jpg"
];

const heroSlides = document.querySelectorAll(".hero-slide");
const heroCounter = document.querySelector(".hero-number");

if (heroSlides.length === 2) {

    let currentImageIndex = 0;
    let activeSlideIndex = 0;

    // Display the first photograph

    heroSlides[0].style.backgroundImage =
        `url("${heroImages[0]}")`;

    heroSlides[0].classList.add("is-active");


    // Update slide number

    function updateCounter() {

        if (heroCounter) {
            const number = String(currentImageIndex + 1).padStart(2, "0");

            heroCounter.textContent =
                `${number} / ${heroImages.length}`;
        }

    }

    updateCounter();


    // Preload all photographs

    heroImages.forEach(src => {

        const image = new Image();
        image.src = src;

    });


    // Respect reduced-motion preferences

    if (!window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches) {

        setInterval(() => {

            currentImageIndex =
                (currentImageIndex + 1) % heroImages.length;

            const nextSlideIndex =
                activeSlideIndex === 0 ? 1 : 0;

            const nextSlide = heroSlides[nextSlideIndex];

            nextSlide.style.backgroundImage =
                `url("${heroImages[currentImageIndex]}")`;

            nextSlide.classList.add("is-active");

            heroSlides[activeSlideIndex].classList.remove("is-active");

            activeSlideIndex = nextSlideIndex;

            updateCounter();

        }, 6000);

    }

}