/*WORKING OF CLOSED ENVELOPE*/
let closeEnvelope = document.querySelector("#closeEnvelope");
var responsive = window.matchMedia("(max-width:1000px)");

function MyFunction1(responsive) {
  if (responsive.matches) {
    responsiveCloseLetter();
  } else {
    animatedCloseLetter();
  }
}

function animatedCloseLetter() {
  let maxPosition = 300;
  let speed = 1;
  let position = 0;
  const animation = setInterval(() => {
    position = position + speed;
    if (position > maxPosition || position < 0) {
      speed = speed * -1;
    }
    closeEnvelope.style.left = position + "px";
  }, 1000 / 40);
}

function responsiveCloseLetter() {
  let maxPosition = 51;
  let speed = 1;
  let position = 0;
  const animation = setInterval(() => {
    position = position + speed;
    if (position > maxPosition || position < 0) {
      speed = speed * -1;
    }
    closeEnvelope.style.left = position + "px";
  }, 1000 / 40);
}

MyFunction1(responsive);
responsive.addEventListener(MyFunction1);
