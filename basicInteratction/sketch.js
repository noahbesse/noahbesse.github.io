// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

// global variables

// the preload function guarentees that the code inside the function is
// executed before the rest of the program runs -- helpful for things
// like loading images (since JS is asynchronous)
function preload()
{

}

// the setup function will only run once (before the draw loop begins)
// this is where you want to set up the environment (size of canvas, etc)
function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(255);
}
function drawRectangle()
{
    rect(100,100,200,400,);
}
function drawElliplse()
{
  ellipse(100,100, 100, 100);
}
function mouseClicked()
{
  drawRectangle();
}
function keyPressed()
{
  if (key === 'w' || key === 'W')
  {
      drawElliplse();
  }
}
function deviceShaken()
{
      print('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
}
