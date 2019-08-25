var menuButton = document.querySelector(".main-nav__toggle"),
    menu = document.querySelector(".main-nav");



menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  menu.classList.toggle("main-nav--opened");
})
