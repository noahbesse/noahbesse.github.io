//Traffic Light Starter Code
//Dan Schellenberg
//Feb 23, 2018

//GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at processing.org/reference.
let state;
function setup() {
  createCanvas(600, 600);
  state = 1;
}


function draw() {
  background(255);
  drawOutlineOfLights();
  changeLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);

  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom

  if (millis() === 3000){
    state = 3;
  }
  if (millis() === 6000){
    state = 2;
  }
  if (millis() === 8000){
    state = 1;
  }

}

function changeLights(){
  if (state === 1){
    color("red");
    ellipse(width/2, height/2 - 65, 50, 50);
  }
  if (state === 2){
    color("yellow");
    ellipse(width/2, height/2, 50, 50);
  }
  if (state === 3){
    color("green");
    ellipse(width/2, height/2 + 65, 50, 50);
  }
}
