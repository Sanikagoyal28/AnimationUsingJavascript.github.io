/*WORKING OF CLOSED ENVELOPE*/
let closeEnvelope = document.querySelector("#closeEnvelope");

window.onload = () => {
  animatedCloseLetter();
};

function animatedCloseLetter() {
  let maxPosition = 300;
  let speed = 1;
  let position = 0;
  const animation = setInterval(() => {
    position = position + speed;
    if (position > maxPosition || position < 0) {
      speed = speed * -1;
    }
    //   speed++;
    closeEnvelope.style.left = position + "px";
  }, 1000 / 40);
}
