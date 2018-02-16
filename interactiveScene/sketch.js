// Interactive Scene Project
// Noah Besse
// Feb, 9, 2018
let alphabet = ["A", "B", "C", "D","E","F","G","H","I","K","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}
function draw() {

}

function keyPressed() {
  let keythatwaspressed = str(key);
  // let special = str(keyCode);
  if (keyIsPressed) {
    // let letter = match(keythatwaspressed,alphabet);
    if (alphabet.includes(keythatwaspressed)){
      textSize(random(100));
      fill(random(255),random(255),random(255));
      text(keythatwaspressed, random(windowWidth), random(windowHeight));
      return false;
    }
    else{
      return false;
    }
  }
}

function mouseClicked() {
  if (mouseButton === LEFT || CENTER || RIGHT){
    fill(random(255),random(255),random(255));
    textSize(random(50,100));
    text("CLICK", random(windowWidth),random(windowHeight));
    return false;
  }
}

function  tocuhStarted(){
  textSize(random(50,100));
  fill(random(255),random(255),random(255));
  text("TAP", random(windowWidth), random(windowHeight));
}
