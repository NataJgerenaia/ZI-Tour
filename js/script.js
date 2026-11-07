
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
