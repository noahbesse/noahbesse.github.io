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
  let keythatwaspressed = key;
  // let special = str(keyCode);
  if (keyIsPressed) {
    fill(random(255),random(255),random(255));
    textSize(random(200));
    text(keythatwaspressed, random(windowWidth),random(windowHeight));
  }
}
function mouseClicked() {
  if (mouseIsPressed){
    text("CLICK", random(windowWidth),random(windowHeight));
  }
}
