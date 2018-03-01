let x, y, radius;
let dx, dy;
let bird;
let state;
function setup(){
  createCanvas(windowWidth,windowHeight);
  x = width/2;
  y = height/2;
  radius = 50;
  dx = random(2, 5);
  dy = random(2, 5);
  state = 1;
}
function draw(){
  if (state === 1){
    displayStartScreen();
  }
  if (state === 2){
    moveThing();
    displayThing();
  }
}
function preload(){
  bird = loadImage("images/bird.png");
}
function moveThing(){
  background(255);
  x += dx;
  y += dy;

  if (y + bird.height/2 >= height || y - bird.height/2 <= 0){
    dy = dy * -1;
  }
  if (x + bird.width/2 >= width || x - bird.width/2 <= 0){
    dx = dx * -1;
  }

}

function displayStartScreen(){
  let buttonWidth = 250;
  let buttonHeight = 150;
  let leftSide =  width/2 - buttonWidth/2;
  let topSide = height/2-buttonHeight/2;
  let rightSide = leftSide + buttonWidth;
  let bottomSide = topSide + buttonHeight;

  fill(0);
  if (mouseX >= leftSide && mouseX <= rightSide && mouseY >= topSide && mouseY <= bottomSide){
    fill(125);
    if (mouseIsPressed){
      state = 2;
    }
  }

  rect (leftSide, topSide ,buttonWidth,buttonHeight);

}

function displayThing(){
  fill(0);

  imageMode(CENTER);
  image(bird,x,y);
}
