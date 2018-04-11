// 2048 Type Game
// Noah Besse
// April 9th, 2018
let grid =[
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0],
  [0,0,0,0]
];
let summon = true;
function setup() {
  createCanvas(windowWidth,windowHeight);

}

function draw() {
  drawgrid();
}

function drawgrid(){
  for (let i = 0;i < 4; i++){
    for(let j = 0;j < 4; j++){
      rect(i * width/4, j * height/4,width/4,height/4);
    }
  }
}

function summonSquare(){
  summon = false;
  if (summon === false){
    return null;
  }
  if (summon === true){
      
  }
}

function keyPressed(){
  if (key === "w" || key === "W" || keyCode === UP_ARROW){
    shiftUp();
    summonSquare();
  }
  if (key === "a" || key === "A" || keyCode === LEFT_ARROW){
    shiftLeft();
    summonSquare();
  }
  if (key === "s" || key === "S" || keyCode === DOWN_ARROW){
    shiftDown();
    summonSquare();
  }
  if (key === "d" || key === "D" || keyCode === RIGHT_ARROW){
    shiftRight();
    summonSquare();
  }
}

function shiftUp(){}
function shiftDown(){}
function shiftLeft(){}
function shiftRight(){}
