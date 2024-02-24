const shareBtn = document.querySelector(".share-button");
const shareBtnLight = document.querySelector(".share-button-light");
const footer = document.querySelector(".container-footer");
const socialMedia = document.querySelector(".container-footer--social-media");
let buttonState = false;

function showIcons() {
  buttonState = !buttonState;
  if (window.innerWidth < 1440) {
    if (buttonState) {
      socialMedia.style.display = "flex";
      footer.style.display = "none";
    } else {
      footer.style.display = "flex";
      socialMedia.style.display = "none";
    }
  } else {
    if (buttonState) {
      socialMedia.style.display = "flex";
    } else {
      socialMedia.style.display = "none";
    }
  }
}

shareBtn.addEventListener("click", showIcons);
shareBtnLight.addEventListener("click", showIcons);
