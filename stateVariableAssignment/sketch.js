let state;
let sizeOfCar, topOfCar, bottomOfCar, rightOfCar, leftOfCar;

function setup(){
  createCanvas(800,800);
  state = 1;
}

function draw(){
  startScreen();
  levelOne();
  gameOver();
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
    fill("red");
    noStroke();
    rect(width - 640,height - 160 ,50,50);
    fill(66, 244, 235);
    rect(100,550,950,50);
    rect(600,250,750,50);
    rect(400,400,85,85);
    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("Click the Square to begin", width/2, height/2);
    if (mouseIsPressed && (mouseX <= width - 615 && mouseX >= width - 665) && mouseY >= height - 185 && mouseY <= height - 135){
      state = 2;
    }
  }
  if (state === 2){
    rectMode(CENTER);
    background(66, 244, 235);
    fill(255);
    noStroke();
    rect(width /2,height/2,600,600);
    car();
    fill(66, 244, 235);
    rect(100,550,950,50);
    rect(600,250,750,50);
    rect(400,400,85,85);
    rect();
    }
  }
}


function car(){
  let x = mouseX;
  let y = mouseY;
  let sizeOfCar = 50;
  let topOfCar =  mouseY - 25;
  bottomOfCar = mouseY + 25;
  rightOfCar = mouseX + 25;
  leftOfCar = mouseX - 25;
  noStroke();
  fill("red");
  rect(x,y,sizeOfCar,sizeOfCar);

}

function gameOver(){
  if (state === 4){
    background(66, 244, 235);
    textAlign(CENTER);
    text("GAME OVER",400,200);
    rectMode(CENTER);
    rect(200,400,150,100);
    rect(600,400,150,100);
    textAlign(CENTER);
    textSize(30);
    text("Restart",200,400 + 10);
    text("Exit",600,400 + 10);
    if (mouseIsPressed && mouseY >=350 && mouseY <= 450){
      if (mouseX >= width - 125 && mouseX <= width - 275){
        state = 1.5;
      }
      if(mouseX >= width - 525 && mouseX <= width - 675){
        state = 1;
      }
    }
  }
}
