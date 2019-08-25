var popupButton = document.querySelector(".top-sale__button , .manufacturing__button"),
    popup = document.querySelector(".modal"),
    popupFog = document.querySelector(".fog");


popupButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--active");
  popupFog.classList.add("fog--active");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal--active")) {
      popup.classList.remove("modal--active");
      popupFog.classList.remove("fog--active");
    }
  }
})

popupFog.addEventListener("click", function (evt) {
  evt.preventDefault();
    if (popup.classList.contains("modal--active")) {
      popup.classList.remove("modal--active");
      popupFog.classList.remove("fog--active");
  }
})

