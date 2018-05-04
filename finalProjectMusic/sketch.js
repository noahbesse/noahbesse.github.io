// Music Visualizer
// Noah Besse
// May the fourth be with you, 2018
let state;

function setup(){
  state = "welcome";
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background(0);
  stateScreens();
}

function stateScreens(){
  if (state === "welcome"){
    fill(0, 255, 0);
    textFont("Agency FB");
    textSize(windowWidth/25);
    text("Welcome to Noah's Music Visualizer",windowWidth/8,windowHeight/2-200);
    rect(windowWidth/10,windowHeight/2,50,25);
  }
}
