let state;
let sizeOfCar;

function setup(){
  createCanvas(800,800);
  noStroke();
  state = 1;
}

function draw(){
  startScreen();
  levelOne();
  gameOver();
}

function startScreen(){
  if (state === 1){
    fill(255);
    background(66, 244, 235);
    rectMode(CENTER);
    rect(width/2,height/2,300,150);
    fill(0);
    textSize(40);
    textAlign(CENTER);
    text("Play",width/2,height/2 + 10);
    textSize(60);
    text("Don't touch the walls", 400,100);
    if (mouseX >= width/2 - 150 && mouseX <= width/2 + 150 && mouseY >= height/2 - 75 && mouseY <= height/2 +75){
      background(66, 244, 235);
      fill(0);
      textSize(60);
      text("Don't touch the walls", 400,100);
      fill(255);
      rectMode(CENTER);
      rect(width/2,height/2,350,175);
      fill(0);
      textSize(50);
      textAlign(CENTER);
      text("Play",width/2,height/2 + 15);
      if (mouseIsPressed){
        state = 2;
      }
    }
  }
}

function levelOne(){
  if (state === 2){
    rectMode(CENTER);
    background(66, 244, 235);
    fill(255);
    rect(width /2,height/2,600,600);
    fill("red");
    noStroke();
    rect(width - 640,height - 160 ,50,50);
    fill(66, 244, 235);
    //far left wall
    rect(100,550,950,50);
    //far right wall
    rect(600,250,750,50);
    //center square
    rect(400,400,85,85);
    //Finish line
    fill(102, 255, 51);
    rect(650,162.5,100,125);

    fill(0);
    textSize(20);
    textAlign(CENTER);
    text("Click the Square to begin", width/2, height/2);
    if  (mouseIsPressed &&
        (mouseX <= width - 615 && mouseX >= width - 665) &&
        (mouseY >= height - 185 && mouseY <= height - 135)){
      state = 3;
    }
  }
  if (state === 3){
    rectMode(CENTER);
    background(66, 244, 235);
    fill(255);
    noStroke();
    rect(width /2,height/2,600,600);
    car();
    fill(66, 244, 235);
    //far left wall
    rect(100,550,950,50);
    //far right wall
    rect(600,250,750,50);
    //center square
    rect(400,400,85,85);
    //finish line
    fill(102, 255, 51);
    rect(650,162.5,100,125);
    //if touches finish line = win
    if(mouseY - 25 <= 275 && mouseX + 25 >= 600 ){
      state = 6;

    }
    //if any of the walls are touched it results in a game over
    if (//outside walls
      mouseY + 27 >= 705 || mouseY - 27 <= 95 ||
        mouseX - 27 <= 95 || mouseX + 27 >= 705 ||
      //middle square
      (mouseX + 25 >= 357.5 && mouseX - 25 <= 442.5 &&
        mouseY + 25 >= 357.5 && mouseY - 25 <= 442.5)||
      //left sticking out wall
      (mouseX - 25 <= 574 && mouseY + 25 >= 525 && mouseY - 25 <= 575)||
      //right sticking out wall
      (mouseX + 25 >= 226 && mouseY + 25 >= 225 && mouseY - 25 <= 275)){
      state = 4;
    }

  }
}

//makes the square follow your mouse
function car(){
  let x = mouseX;
  let y = mouseY;
  let sizeOfCar = 50;
  noStroke();
  fill("red");
  rect(x,y,sizeOfCar,sizeOfCar);

}

function gameOver(){
  if(state === 6){
    background(66, 244, 235);
    textAlign(CENTER);
    text("YOU WIN!",400,200);
    rectMode(CENTER);
    fill(255);
    rect(200,400,150,100);
    rect(600,400,150,100);
    fill(0);
    textAlign(CENTER);
    textSize(30);
    text("Restart",200,400 + 10);
    text("Exit",600,400 + 10);
  }
  if (mouseIsPressed && mouseY >=350 && mouseY <= 450){
    //restart
    if (mouseX >= width - 125 || mouseX <= width - 275){
      state = 1.5;
    }
    //exit to menu
    if(mouseX >= width - 525 || mouseX <= width - 675){
      state = 1;
    }
  }
  if (state === 4){
    background(66, 244, 235);
    textAlign(CENTER);
    text("GAME OVER",400,200);
    rectMode(CENTER);
    fill(255);
    rect(200,400,150,100);
    rect(600,400,150,100);
    fill(0);
    textAlign(CENTER);
    textSize(30);
    text("Restart",200,400 + 10);
    text("Exit",600,400 + 10);
    if (mouseIsPressed && mouseY >=350 && mouseY <= 450){
      //restart
      if (mouseX >= width - 125 || mouseX <= width - 275){
        state = 1.5;
      }
      //exit to menu
      if(mouseX >= width - 525 || mouseX <= width - 675){
        state = 1;
      }
    }
  }
}
