/*BUTTON WORK*/

let button = document.getElementById("call");

button.addEventListener("mouseover", function () {
  button.style.transform = "scale(1.1)";
});

button.addEventListener("mouseout", function () {
  button.style.transform = "scale(1)";
});

/*HEADING*/

const text = document.querySelector("#mailHead");
const strText = text.textContent;
text.textContent = "";
const string = strText.split("");
for (let i = 0; i < strText.length; i++) console.log(string[i]);

let animateText = setInterval(textFunction, 400);
let char = 0;
function textFunction() {
  if (char == strText.length) {
    char = 0;
    text.textContent = "";
  } else {
    text.textContent += string[char];
    char = char + 1;
  }
}

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
  let maxPosition = 400;
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
