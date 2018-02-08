// p5js template project - replace with project title
// Dan Schellenberg - replace with your name
// Feb 2, 2018 - replace with the date

function setup()
{
  createCanvas(windowWidth,windowHeight)
}

function draw()
{

}

function mouseClicked()
{
  noStroke();
  fill(random(255), random(255), random(255), random(255));
  rect(mouseX,mouseY,random(50,200),random(50,200))
}

function keyPressed()
{
  noStroke()
  fill(random(255), random(255), random(255), random(255));
  ellipse(random(0, width), random(0, height), random(50, 200), random(50, 200));
}

function deviceShaken()
{
  fill(0);
  text("AAAAAAAAAAAAAAAAAAAAA", width/2,height/2);
  textAlign(CENTER);
  textSize(60);
  textFont("Arial");
}
