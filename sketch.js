var rad = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("aqua");
  rectMode(CENTER);

  push();
  rad += 0.05;
  translate(windowWidth/2, windowHeight/2);
  rotate(rad);
  square(0, 0, 100);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
