const darkSwitchIcon = document.querySelector("#dark-switch-icon");
const darkSwitch = document.querySelector("#dark-switch");
const darkText = document.querySelector("#dark-text");
const darkChangeText = document.querySelector("#dark-text-change");
const html = document.documentElement;
let isDarkMode = false;

// Switch theme function
const toggleTheme = () => {
  isDarkMode = !isDarkMode;
  switchTheme();
};

const toDark = () => {
  darkSwitchIcon.innerHTML = `<i class="fa-solid fa-moon text-red-500"></i>`;
  // darkChangeText.innerText = 'Dark'
  localStorage.setItem("data-theme", "dark");
  html.classList.add("dark");
};

const toLight = () => {
  // darkChangeText.innerText = 'Light'
  localStorage.removeItem("data-theme");
  html.classList.remove("dark");
  darkSwitchIcon.innerHTML = `<i class="fa-regular fa-sun"></i>`;
  setTimeout(() => {
    darkSwitchIcon.classList.remove("rotate-[360deg]");
  }, 200);
};

const switchTheme = () => {
  isDarkMode ? toDark() : toLight();
  // or
  // if (isDarkMode) {
  //     toDark()
  // } else {
  //     toLight()
  // }
};

// If you do reload the webpage,
// doesn't change you choose theme.
// This `dataTheme` function save permentaly choose theme.

const dataTheme = localStorage.getItem("data-theme");

dataTheme === "dark" ? toDark() : toLight();
// or
// if(dataTheme === 'dark') {
//     toDark()
// } else {
//     toLight()
// }

// menu 
const mobileMenu = document.querySelector(".mobile-menu");
const mobile = document.querySelector("#mobile");
const mobileClose = document.querySelector("#menu-close");
mobileMenu.addEventListener("click", () => {
  mobile.style.left = "0";
});

mobileClose.addEventListener("click", () => {
  mobile.style.left = "-100%";
});
