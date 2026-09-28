"use strict";


/*
 * Page elements.
 */

const menuToggle = document.querySelector(
    ".menu-toggle"
);

const primaryNavigation = document.querySelector(
    "#primary-navigation"
);

const navigationLinks = document.querySelectorAll(
    "#primary-navigation a"
);

const currentYear = document.querySelector(
    "#current-year"
);

const themeToggle = document.querySelector(
    "#theme-toggle"
);

const themeToggleIcon = document.querySelector(
    ".theme-toggle-icon"
);

const themeToggleText = document.querySelector(
    ".theme-toggle-text"
);


/*
 * Display the current year automatically.
 */

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


/*
 * Open or close the mobile navigation.
 */

function setMenuState(isOpen) {
    if (!menuToggle || !primaryNavigation) {
        return;
    }

    menuToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    primaryNavigation.classList.toggle(
        "is-open",
        isOpen
    );
}


if (menuToggle && primaryNavigation) {
    menuToggle.addEventListener("click", () => {
        const isCurrentlyOpen =
            menuToggle.getAttribute("aria-expanded") === "true";

        setMenuState(!isCurrentlyOpen);
    });
}


/*
 * Close the menu after a navigation link is selected.
 */

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        setMenuState(false);
    });
});


/*
 * Close the menu when the Escape key is pressed.
 */

document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") {
        return;
    }

    const menuWasOpen =
        menuToggle?.getAttribute("aria-expanded") === "true";

    setMenuState(false);

    if (menuWasOpen && menuToggle) {
        menuToggle.focus();
    }
});


/*
 * Close the mobile menu when the viewport changes to desktop.
 */

const desktopNavigationQuery = window.matchMedia(
    "(min-width: 721px)"
);

function handleViewportChange(event) {
    if (event.matches) {
        setMenuState(false);
    }
}

desktopNavigationQuery.addEventListener(
    "change",
    handleViewportChange
);


/*
 * Return the currently active color theme.
 */

function getCurrentTheme() {
    return document.documentElement.dataset.theme || "dark";
}


/*
 * Update the theme button to describe its next action.
 */

function updateThemeButton(theme) {
    if (
        !themeToggle ||
        !themeToggleIcon ||
        !themeToggleText
    ) {
        return;
    }

    const isDarkTheme = theme === "dark";
    const nextTheme = isDarkTheme ? "light" : "dark";

    themeToggleIcon.textContent =
        isDarkTheme ? "☀" : "☾";

    themeToggleText.textContent =
        isDarkTheme ? "Light" : "Dark";

    themeToggle.setAttribute(
        "aria-label",
        `Switch to ${nextTheme} theme`
    );

    themeToggle.setAttribute(
        "title",
        `Switch to ${nextTheme} theme`
    );
}


/*
 * Apply and save the selected color theme.
 */

function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;

    localStorage.setItem(
        "portfolio-theme",
        theme
    );

    updateThemeButton(theme);
}


/*
 * Initialize the button and listen for theme changes.
 */

if (themeToggle) {
    updateThemeButton(getCurrentTheme());

    themeToggle.addEventListener("click", () => {
        const nextTheme =
            getCurrentTheme() === "dark"
                ? "light"
                : "dark";

        applyTheme(nextTheme);
    });
}