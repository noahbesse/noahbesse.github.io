// Interactive Scene Project
// Noah Besse
// Feb, 9, 2018
let alphabet = ["A", "B", "C", "D","E","F","G","H","I","K","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
let numbers = ["1","2","3","4","5","6","7","8","9","0"];
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}
//makes it so if a letter or number(doesnt work with the numpad) is pressed, it will output said letter or number to the
//screen with a random color and with random coordinates. It also checks that the button pressed was not a special key(such as delete or backspace)
//and so it displays nothing when those are pressed.
function keyPressed() {
  let keythatwaspressed = str(key);
  if (keyIsPressed) {
    if (alphabet.includes(keythatwaspressed)){
      textSize(random(100));
      fill(random(255),random(255),random(255));
      text(keythatwaspressed, random(windowWidth), random(windowHeight));
      return false;
    }
    if (numbers.includes(keythatwaspressed)) {
      textSize(random(100));
      fill(random(255),random(255),random(255));
      text(keythatwaspressed, random(windowWidth), random(windowHeight));
      }
    if (keythatwaspressed === " "){
      background(255);
    }
    else{
      return false;
    }
  }
}
//if the mouse is clicked it outputs the word CLICK to the screen in random positions with a random color
function mouseClicked() {
  if (mouseButton === LEFT || CENTER || RIGHT){
    fill(random(255),random(255),random(255));
    textSize(random(50,100));
    text("CLICK", random(windowWidth),random(windowHeight));

  }
  return false;

}

//makes the words SHAKEY SHAKEY appear when the
function deviceShaken(){
  textSize(random(50,100));
  fill(random(255),random(255),random(255));
  text("SHAKEY SHAKEY", random(windowWidth), random(windowHeight));
}
