const cvs = document.querySelector("#canvas");
const ctx = cvs.getContext("2d");

//images for game
let bird = new Image();
let background = new Image();
let foreground = new Image();
let pipeNorth = new Image();
let pipeSouth = new Image();
bird.src = "../image/bird.png";
background.src = "../image/bg.png";
foreground.src = "../image/fg.png";
pipeNorth.src = "../image/pipeNorth.png";
pipeSouth.src = "../image/pipeSouth.png";

// variables
let gap = 90; // gap between pipes
let constant; // position for the south pipe
let bX = 10; // bird X position
let bY = 150; // bird Y position
let gravity = 1; // 1 pixel fall
let score = 0; // players score

let fly = new Audio();
let scor = new Audio();
fly.src = "../sounds/fly.mp3";
scor.src = "../sounds/score.mp3";

//event listeners for key, touch, or click input
document.addEventListener("keydown", event => {
  event.stopPropagation();
  event.preventDefault();
  moveUp();
});
cvs.addEventListener("touchstart", event => {
  event.stopPropagation();
  moveUp();
});

function moveUp() {
  bY -= 20;
  fly.play();
}

// pipes
let pipe = [];
pipe[0] = {
  x: cvs.width,
  y: 0
};

// draw it all
function draw() {
  ctx.drawImage(background, 0, 0);
  for (let i = 0; i < pipe.length; i++) {
    constant = pipeNorth.height + gap;
    ctx.drawImage(pipeNorth, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeSouth, pipe[i].x, pipe[i].y + constant);
    pipe[i].x--;

    if (pipe[i].x == 100) {
      pipe.push({
        x: cvs.width,
        y: Math.floor(Math.random() * pipeNorth.height) - pipeNorth.height
      });
    }

    // collision catch
    if (
      (bX + bird.width >= pipe[i].x &&
        bX <= pipe[i].x + pipeNorth.width &&
        (bY <= pipe[i].y + pipeNorth.height ||
          bY + bird.height >= pipe[i].y + constant)) ||
      bY + bird.height >= cvs.height - foreground.height
    ) {
      location.reload(); // reload the page
    }

    if (pipe[i].x == 5) {
      score++;
      scor.play();
    }
  }
  ctx.drawImage(foreground, 0, cvs.height - foreground.height);
  ctx.drawImage(bird, bX, bY);

  bY += gravity;
  ctx.fillStyle = "#000";
  ctx.font = "20px Verdana";
  ctx.fillText("Score : " + score, 10, cvs.height - 20);

  requestAnimationFrame(draw);
}

draw();
