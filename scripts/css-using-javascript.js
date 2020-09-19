let body = document.querySelector("#body");
let content = document.querySelector("#content");

function resetAll() {
  body.style.backgroundColor = "white";
  content.style.backgroundColor = "white";
  content.style.color = "black";
  content.style.fontSize = "16px";
  content.style.paddingTop = "0px";
  content.style.paddingLeft = "0px";
}

function backgroundChanger(color) {
  body.style.backgroundColor = color;
  content.style.backgroundColor = color;
}

function fontSizeChanger(size) {
  content.style.fontSize = size;
}

function fontColorChanger(color) {
  content.style.color = color;
}

let leftPadding = 20;
let topPadding = 20;
function paddingChanger(dir) {
  switch (dir) {
    case "left":
      leftPadding -= 10;
      content.style.paddingLeft = leftPadding + "px";
      break;
    case "right":
      leftPadding += 10;
      content.style.paddingLeft = leftPadding + "px";
      break;
    case "up":
      topPadding -= 10;
      content.style.paddingTop = topPadding + "px";
      break;
    case "down":
      topPadding += 10;
      content.style.paddingTop = topPadding + "px";
      break;
  }
}
