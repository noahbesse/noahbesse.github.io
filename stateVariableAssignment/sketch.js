let state;
let sizeOfCar, topOfCar, bottomOfCar, rightOfCar, leftOfCar;

function setup(){
  createCanvas(800,800);
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
    text("Play",width/2,height/2 + 10);
    if (mouseX >= width/2 - 150 && mouseX <= width/2 + 150 && mouseY >= height/2 - 75 && mouseY <= height/2 +75){
      background(66, 244, 235);
      rectMode(CENTER);
      rect(width/2,height/2,350,175);
      textSize(50);
      textAlign(CENTER);
      text("Play",width/2,height/2 + 15);
      if (mouseIsPressed){
        state = 1.5;
      }
    }
  }
}

function levelOne(){
  if (state === 1.5){
    rectMode(CENTER);
    background(66, 244, 235);
    fill(255);
    rect(width /2,height/2,600,600);
    rect(width - 670,height - 130,50,50);
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("Click the Square to begin", width/2, height/2);
    if (mouseIsPressed && (mouseX <= width - 645 && mouseX >= width - 695) && mouseY >= height - 155 && mouseY <= height - 115){
      state = 2;
    }
  }
  if (state === 2){
    rectMode(CENTER);
    background(66, 244, 235);
    fill(255);
    rect(width /2,height/2,600,600);
    car();
    /*if (leftOfCar <= 200){
      state = 5;*/
    //}
  }
}

function car(){
  let x = mouseX;
  let y = mouseY;
  let sizeOfCar = 50;
  let topOfCar =  mouseY - 25;
  bottomOfCar = mouseY + 25;
  rightOfCar = mouseX + 25;
  leftOfCar = mouseX -25;
  rect(x,y,sizeOfCar,sizeOfCar);

}

function gameOver(){
  if (state === 5){
    background(66, 244, 235);
    textAlign(CENTER);
    text("GAME OVER",400,400);
  }
}
