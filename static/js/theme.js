// Theme switcher from CSS-Tricks. It was there for the taking.

// Select the button
const themeToggle = document.querySelector(".theme-toggle");

// Check for dark mode preference at the OS level
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

// Set the body class and button contents according to the theme, defaulting to light
const currentTheme = localStorage.getItem("theme") || (prefersDarkScheme.matches ? "dark" : "light");
if (currentTheme == "dark") {
  document.body.classList.add("dark-mode");
  document.body.classList.remove("light-mode");
} else if (currentTheme == "light") {
  document.body.classList.add("light-mode");
  document.body.classList.remove("dark-mode");
}

// A bit redundant, but in the cases where the theme has not yet been set, we want make sure it finds its way into localStorage.
localStorage.setItem("theme", currentTheme);

// Listen for a click on the button 
themeToggle.addEventListener("click", function() {
  document.body.classList.toggle("light-mode");
  document.body.classList.toggle("dark-mode");
  const theme = localStorage.getItem("theme") == "dark" ? "light" : "dark";

  localStorage.setItem("theme", theme);
});
