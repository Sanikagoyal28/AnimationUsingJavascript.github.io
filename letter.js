/*CANVAS*/

let canvas = document.querySelector("#canvasB");
let c = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let CircleColor = [
  "#967E76",
  "#EEE3CB",
  "#874C62",
  "#B73E3E",
  "#FFE7CC",
  "#000000",
  "#AF0171",
  "#EEEEEE",
  "#D2001A",
  "#FFABE1",
  "yellow",
  "#704F4F",
];

function CIRCLE(x, y, radius, dx, dy) {
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.dx = dx;
  this.dy = dy;
  this.color = CircleColor[Math.floor(Math.random() * CircleColor.length)];
  this.draw = function () {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, 30, false);
    c.fillStyle = this.color;
    c.fill();
  };

  this.update = function () {
    if (this.radius + this.x > innerWidth || this.x - this.radius < 0)
      this.dx = -this.dx;
    if (this.radius + this.y > innerHeight || this.y - this.radius < 0)
      this.dy = -this.dy;
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  };
}

let CircleArray = [];

for (let i = 0; i < 250; i++) {
  let x = Math.random() * innerWidth;
  let y = Math.random() * innerHeight;
  let radius = Math.random() * 20;
  let dx = Math.random() * 2;
  let dy = Math.random() * 2;

  CircleArray.push(new CIRCLE(x, y, radius, dx, dy));
}

function animate() {
  requestAnimationFrame(animate);

  c.clearRect(0, 0, innerWidth, innerHeight);
  for (let i = 0; i < CircleArray.length; i++) {
    CircleArray[i].draw();
    CircleArray[i].update();
  }
}
animate();

/*LETTER WORK */
let OEnvelope = document.querySelector("#openEnvelope");
const open = document.querySelector("#letter");

function letterDisplay() {
  open.style.visibility = "visible";
}

function letterMove() {
  let position = 160;
  let move = setInterval(animate, 1000 / 30);
  function animate() {
    if (position == 370) clearInterval(move);
    else position = position + 1;
    open.style.top = position + "px";
  }
}
function EnvelopeDisplay() {
  OEnvelope.style.opacity = "0.7";
}
setTimeout("EnvelopeDisplay()", 1000);
setTimeout("letterDisplay()", 1600);
setTimeout("letterMove()", 2000);
