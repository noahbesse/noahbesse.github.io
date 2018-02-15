let x, y, radius;
let dx, dy;
let bird;

function setup(){
  createCanvas(windowWidth,windowHeight);
  x = width/2;
  y = height/2;
  radius = 50;
  dx = random(2, 5);
  dy = random(2, 5);
}
function draw(){
  moveThing();
  displayThing();
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

function displayThing(){
  fill(0);
  bird.resize(250,150);
  imageMode(CENTER);
  image(bird,x,y);
}
