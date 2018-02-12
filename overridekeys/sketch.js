function setup(){
  createCanvas(windowWidth,windowHeight);
  noStroke();
}

function draw(){
  detectMouse();
}
function detectMouse(){

  if (mouseX < windowWidth/2){
    fill(200);
    rect(random(windowWidth/2),random(windowHeight),200,100);
  }
  else if (mouseX > windowWidth/2){
    fill(random(255),random(255),random(255));
    ellipse(random(windowWidth/2, width),random(windowHeight),random(200));
  }
}
function mousePressed(){
  background(255);
}
