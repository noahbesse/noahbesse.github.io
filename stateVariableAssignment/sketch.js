let state;

function setup(){
  createCanvas(windowWidth,windowHeight);
  state = 1;
}

function draw(){
  startScreen();
  levelOne();
}

function startScreen(){
  if (state === 1){
    background(66, 244, 235);
    rectMode(CENTER);
    rect(width/2,height/2,300,150);
    textSize(40);
    textAlign(CENTER);
    text("Play",width/2,height/2);
    if (mouseX >= width/2 - 150 && mouseX <= width/2 + 150 && mouseY >= height/2 - 75 && mouseY <= height/2 +75){
      background(66, 244, 235);
      rectMode(CENTER);
      rect(width/2,height/2,350,175);
      textSize(50);
      textAlign(CENTER);
      text("Play",width/2,height/2);
      if (mouseIsPressed){
        state = 1.5;
      }
    }
  }
}

function levelOne(){
  if (state === 2){
    rectMode(CENTER);
    background(66, 244, 235);
    rect(width /2,height/2,600,600);
    car();
  }
}

function car(){
  let x = mouseX;
  let y = mouseY;
  let sizeOfCar = 50;
  let topOfCar =  sizeOfCar -25;
  let bottomOfCar = sizeOfCar + 25;
  let rightOfCar = sizeOfCar
  rect(x,y,sizeOfCar,sizeOfCar);

}
