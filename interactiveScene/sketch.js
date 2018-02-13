// Interactive Scene Project
// Noah Besse
// Feb, 9, 2018

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {


}

function keyPressed() {
  let keythatwaspressed = str(key);
  let special = str(keyCode);
  if (keyIsPressed) {
    fill(random(255),random(255),random(255));
    textSize(random(200));
    text((keythatwaspressed || special), random(windowWidth),random(windowHeight));




  }
  return false;
}
