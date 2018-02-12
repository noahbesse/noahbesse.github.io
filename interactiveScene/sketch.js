// Interactive Scene Project
// Noah Besse
// Feb, 9, 2018

function setup(){
  createCanvas(windowWidth,windowHeight);
   let input = createInput('');
   let stringTyped = input.value('');
  input.position(windowWidth/2 - 90,windowHeight/2 - 30);

  let button = createButton('Submit');
  button.position(windowWidth/2 - 30,windowHeight/2);
  button.mousePressed();
}

function draw(){
 hello();
}

function hello(){
  if (whatTheyTyped == "hello");
  text('Hello!',windowWidth/2,windowHeight/2 + 200);
}
