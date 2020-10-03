// Button
var toggle = document.querySelectorAll('#header > #nav > ul > .icon')[0];

// Element to toggle
toggle.addEventListener('click', function(e) {
  document.querySelectorAll("#header > #nav > ul")[0].classList.toggle("responsive");
}, false);


