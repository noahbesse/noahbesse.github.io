//Traffic Light Starter Code
//Dan Schellenberg
//Feb 23, 2018

//GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at processing.org/reference.

let state;
let redLightDuration, yellowLightDuration, greenLightDuration;
let lastTimeLightChanged;

function setup() {
  createCanvas(600, 600);
  state = 1;
  redLightDuration = 3000;
  yellowLightDuration = 500;
  greenLightDuration = 3000;
  lastTimeLightChanged = millis();
}

function draw() {
  background(255);
  drawOutlineOfLights();
  checkIfLightSwitched();
  displayCorrectLight();
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
}

function checkIfLightSwitched(){
  if (state === 1){
    if(millis() > lastTimeLightChanged + greenLightDuration){
      state = 2;
      lastTimeLightChanged = millis();
    }
  }
  if (state === 2){
    if(millis() > lastTimeLightChanged + yellowLightDuration){
      state = 3;
      lastTimeLightChanged = millis();
    }
  }
  if (state === 3){
    if(millis() > lastTimeLightChanged + redLightDuration){
      state = 1;
      lastTimeLightChanged = millis();
    }
  }
}

function displayCorrectLight(){
  if (state === 1){
    drawGreenLight();
  }
  if (state === 2){
    drawYellowLight();
  }
  if (state === 3){
    drawRedLight();
  }
}


function drawGreenLight(){
  fill(0,255,0);
  ellipse(width/2, height/2 + 65, 50, 50);
}

function drawRedLight(){
  fill(255,0,0);
  ellipse(width/2, height/2 - 65, 50, 50);
}

function drawYellowLight(){
  fill(255, 255, 0);
  ellipse(width/2, height/2, 50, 50);

}
