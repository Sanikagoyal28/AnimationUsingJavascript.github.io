let b1 = document.querySelector("#balloon1");
let b2 = document.querySelector("#balloon2");
let b3 = document.querySelector("#balloon3");

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
moveB1();

function moveB2() {
  let start = 100;
  const moving = setInterval(() => {
    start += 1;
    if (start > 550) {
      setInterval((start = 0), 1000);
    }
    b2.style.right = start + "px";
    b2.style.bottom = start + "px";
  }, 1000 / 40);
}
moveB2();

function moveB3() {
  let start = 200;
  const moving = setInterval(() => {
    start += 1;
    if (start > 1400) {
      setInterval((start = 0), 1000);
    }
    // b3.style.bottom = start + "px";
    b3.style.left = start + "px";
  }, 1000 / 30);
}
moveB3();
