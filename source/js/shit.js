var popupWriteLink = document.querySelector(".top-sale__button , .manufacturing__button"),
    popupWrite = document.querySelector(".modal"),
    popupFog = document.querySelector(".fog"),
    slideMenuButton = document.querySelector(".main-nav__toggle"),
    slideMenu = document.querySelector(".main-nav");



slideMenuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  slideMenu.classList.toggle("main-nav--closed");
  slideMenu.classList.toggle("main-nav--opened");
})

popupWriteLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  popupWrite.classList.add("modal--active");
  popupFog.classList.add("fog--active");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popupWrite.classList.contains("modal--active")) {
      popupWrite.classList.remove("modal--active");
      popupFog.classList.remove("fog--active");
    }
  }
})

popupFog.addEventListener("click", function (evt) {
  evt.preventDefault();
    if (popupWrite.classList.contains("modal--active")) {
      popupWrite.classList.remove("modal--active");
      popupFog.classList.remove("fog--active");
  }
})
