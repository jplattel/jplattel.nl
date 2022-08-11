// Nav button
var toggleNav = document.querySelectorAll('#header > #nav > ul > .icon')[0];
toggleNav.addEventListener('click', function(e) {
  document.querySelectorAll("#header > #nav > ul")[0].classList.toggle("responsive");
}, false);

// Dark/light theme
var toggleDarkLight = document.getElementById("toggle-theme");
var darkTheme = document.getElementById("dark-mode-theme");

toggleDarkLight.addEventListener("click", () => {
  if (toggleDarkLight.className === "fa fa-moon") {
    darkTheme.disabled = false;
    localStorage.setItem("dark-mode", true);
    toggleDarkLight.className = "fa fa-sun";
  } else if (toggleDarkLight.className === "fa fa-sun") {
    darkTheme.disabled = true;
    localStorage.removeItem("dark-mode");
    toggleDarkLight.className = "fa fa-moon";
  }
});

// The default theme is light
var dark = localStorage.getItem("dark-mode") || false;
console.log(dark)
if (dark) {
  console.log(dark)
  darkTheme.disabled = false;
  toggleDarkLight.className = "fa fa-sun";
}