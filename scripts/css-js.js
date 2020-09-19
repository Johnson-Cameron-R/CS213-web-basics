let box = document.querySelector("#box");
let box1 = document.querySelector("#box1");
let box2 = document.querySelector("#box2");

function changeBackground(color) {
  box.style.transition = "background 1.0s linear 0s";
  box.style.background = color;
}

function fadeOut() {
  box.style.transition = "opacity 1.0s linear 0s";
  box.style.opacity = 0;
}

function fadeIn() {
  box.style.transition = "opacity 1.0s ease-in 0s";
  box.style.opacity = 1;
}

function slideOpen() {
  box1.style.transition = "height 0.5s linear 0s";
  box1.style.height = "200px";
}

function slideClose() {
  box1.style.transition = "height 0.5s linear 0s";
  box1.style.height = "0px";
}

function slideIn() {
  box2.style.transition = "left 1s linear 0s";
  box2.style.left = "0px";
}

function slideOut() {
  box2.style.transition = "left 1s linear 0s";
  box2.style.left = "-500px";
}
