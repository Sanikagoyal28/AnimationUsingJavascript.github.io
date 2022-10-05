/*BALLOON MOVEMENT*/

let b1 = document.querySelector("#balloon1");
let b2 = document.querySelector("#balloon2");
let b3 = document.querySelector("#balloon3");
let responsive = window.matchMedia("(max-width;1000px)");
let start1, start2, start3, end1, end2, end3;

function moveB1() {
  let start = 200;
  const moving = setInterval(() => {
    start += 1;
    if (start > 600) {
      setInterval((start = 0), 1200);
    }
    b1.style.bottom = start + "px";
  }, 1000 / 60);
}

function moveB2() {
  let start = 100;
  const moving = setInterval(() => {
    start += 1;
    if (start > 550) {
      setInterval((start = 0), 1000);
    }
    b2.style.bottom = start + "px";
  }, 1000 / 40);
}

function moveB3() {
  let start = 10;
  const moving = setInterval(() => {
    start += 1;
    if (start > 1400) {
      setInterval((start = 0), 1000);
    }
    b3.style.left = start + "px";
  }, 1000 / 30);
}

function RmoveB1() {
  let start = 50;
  const moving = setInterval(() => {
    start += 1;
    if (start > 300) {
      setInterval((start = 0), 1200);
    }
    b1.style.bottom = start + "px";
  }, 1000 / 60);
}

function RmoveB2() {
  let start = 50;
  const moving = setInterval(() => {
    start += 1;
    if (start > 350) {
      setInterval((start = 0), 1000);
    }
    b2.style.bottom = start + "px";
  }, 1000 / 40);
}

function RmoveB3() {
  let start = 10;
  const moving = setInterval(() => {
    start += 1;
    if (start > 300) {
      setInterval((start = 0), 500);
    }
    b3.style.left = start + "px";
  }, 1000 / 30);
}

function MyFunction3(responsive) {
  if (responsive.matches) {
    RmoveB1();
    RmoveB2();
    RmoveB3();
  } else {
    moveB1();
    moveB2();
    moveB3();
  }
}

MyFunction3(responsive);

/*SECTION VISIBILITY*/
let block = document.querySelector("#mainBlock");
setTimeout(() => {
  block.style.visibility = "visible";
}, 1000);

/*IMAGE ROTATION*/
let swastik = document.querySelector("#swastik");

let angle = 10;
function rotating() {
  const rotated = setInterval(() => {
    swastik.style.transform = "rotate(angle++)";
  }, 1000 / 60);
}
rotating();

/*CANVAS*/
let canvas = document.querySelector("#canvasA");
let c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function drawCircle(x, y) {
  this.y = y;
  this.x = x;
  this.draw = () => {
    c.beginPath();
    c.arc(x, y, 1.5, 0, Math.PI * 2, false);
    c.strokeStyle = "blue";
    c.fillStyle = "white";
    c.fill();
    c.stroke();
  };
  this.move = () => {
    y += 0.5;
    if (y > window.innerHeight) y = 0;
  };
}
let CircleArray = [];
for (i = 0; i < 70; i++) {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  CircleArray.push(new drawCircle(x, y));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  for (i = 0; i < CircleArray.length; i++) {
    CircleArray[i].draw();
    CircleArray[i].move();
  }
  // y += 1;
  // if (y + 10 > window.innerHeight) y = 100;
}
animate();

/*ROCKET*/

let rocket = document.querySelector("#rocket");

function rocketMove() {
  let st = 0;
  const rMove = setInterval(() => {
    st += 4;
    if (st > 1200) setInterval((st = 0), 1000);
    rocket.style.left = st + "px";
    rocket.style.bottom = st + "px";
  }, 1000 / 60);
}
rocketMove();

let rocket2 = document.querySelector("#rocket2");

function rocket2Move() {
  let st = 0;
  const RMove = setInterval(() => {
    st += 5;
    if (st > 1000) setInterval((st = 0), 1000);
    rocket2.style.right = st + "px";
    rocket2.style.bottom = st + "px";
  }, 10);
}
rocket2Move();
/*SOUND*/

let sound = new Audio("FireWorks-Rocket-Whistles-www.fesliyanstudios.com.mp3");
sound.play();
