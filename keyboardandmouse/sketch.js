// Demos of stuff
// Noah Besse
// Feb 8, 2018 - replace with the date
document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false)

function setup()
{
  createCanvas(windowWidth,windowHeight);
  background(255);
}

function draw()
{
  noStroke();
  fill(random(255),random(255),random(255))
  if (mouseIsPressed)
  {
    if (mouseButton === LEFT)
    {
      rect(mouseX,mouseY,200,400);
    }
    else if (mouseButton === RIGHT)
    {
      ellipse(mouseX,mouseY,100);
    }
  }
  if (keyIsPressed)
  {
    if (key === 'w' || key === 'W')
    {
      background(255);
    }
    else if (key === 'B'|| key === 'b')
    {
      background(0);
    }
  }
}
