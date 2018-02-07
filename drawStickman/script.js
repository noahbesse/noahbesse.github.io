//global variables
let x;
let y;
let isMovingUp, isMovingDown,isMovingLeft, isMovingRight

function setup()
{
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
  isMovingUp = false;
  isMovingDown  = false;
  isMovingLeft = false;
  isMovingRight = false;
}
function keyPressed()
{
  if (key === 'W' || key === 'w')
  {
    isMovingUp = true;
  }
  else if (key === 'S' || key === 's')
  {
  isMovingDown = true;
  }
  if (key === 'D' || key === 'd')
  {
    isMovingRight = true;
  }
  else if (key === 'A' || key === 'a')
  {
    isMovingLeft = true;a
  }
}
function moveStickman()
{
  if (isMovingUp)
  {
    y -= 10;
  }
  else if (isMovingDown)
  {
    y += 10;
  }
  if (isMovingRight)
  {
    x += 10;
  }
  else if (isMovingLeft)
  {
    x -= 10;
  }
}
function keyReleased()
{
  if (key === 'W' || key === 'w')
  {
    isMovingUp = false;
  }
  else if (key === 'S' || key === 's')
  {
  isMovingDown = false;
  }
  if (key === 'D' || key === 'd')
  {
    isMovingRight = false;
  }
  else if (key === 'A' || key === 'a')
  {
    isMovingLeft = false;
    }

}
function draw()
{
  background(255)
  drawStickman(x,y);
  if (keyIsPressed)
  {
    moveStickman()
  }
}
function drawStickman(x,y)
{
  //head of stick boi
  fill(255,255,255);
  arc(x, y, 100, 100, 0, TWO_PI);
  //body of stick boi
  fill(255,0,0);
  line(x, y+50, x, y+150);
  //hat of stick boi
  rect(x-50, y-75, 100, 25);
  rect(x-17.5, y-145, 35, 70);
  //legs and arms of stick boi
  line(x-50, y+100, x+50, y+100);
  line(x, y+150, x+50, y+250);
  line(x, y+150, x-50, y+250);
}
