//Minesweeper
//Noah Besse
//April 14,2018
let state;
let rows = 10;
let cols = 10;
let grid;
let cellSize;
let currentCol;
let currentRow;
let amountOfNeighbors;


function setup() {
  createCanvas(600, 600);
  cellSize = width / cols;
  grid = createRandom2dArray(cols, rows);
  //gives the location that you clicked exact coordinates opposed to one
  //with a lot of decimal places
  currentRow = Math.floor(mouseY / cellSize);
  currentCol = Math.floor(mouseX / cellSize);
  state = 1;

}
function startScreen(){
  if (state === 1){
    rect(width/2 - 200,height/2 - 100,400,200);
    textSize(48);
    text("Press Space", width/2 - 130,height/2+20);
    if (keyIsPressed){
      if (keyCode === 32){
        state = 2;
      }
    }
  }
}
function draw() {
  startScreen();
  gameScreen();
  gameOver();
}

function gameScreen(){
  if (state === 2){
    displayEmptyGrid();
    if (mouseIsPressed){
      if (grid[currentCol][currentRow] === 0){
        state = 3;
      }
      if (grid[currentCol][currentRow] ===1){
        displayNeighbors();
      }
    }
  }
}
function displayEmptyGrid(){
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      rect(x*cellSize, y*cellSize, cellSize,cellSize);
    }
  }
}
function displayGrid() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      if (grid[x][y] === 0) {
        fill(0);
      }
      else {
        fill(255);
      }
      rect(x*cellSize, y*cellSize, cellSize, cellSize);
    }
  }
}
function createRandom2dArray(cols, rows) {
  let randomGrid = [];
  for (let x=0; x<cols; x++) {
    randomGrid.push([]);
    for (let y=0; y<rows; y++) {
      if (random(100) < 20 ) {
        randomGrid[x].push(0);

      }
      else {
        randomGrid[x].push(1);
      }
    }
  }
  return randomGrid;
}
function createEmpty2dArray(cols, rows) {
  let randomGrid = [];
  for (let x=0; x<cols; x++) {
    randomGrid.push([]);
    for (let y=0; y<rows; y++) {
      randomGrid[x].push(0);
    }
  }
  return randomGrid;
}
function displayNeighbors(){
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {

      let neighbors = 0;
      for (let i=-1; i<=1; i++) {
        for (let j=-1; j<=1; j++) {
          if (currentCol+i >= 0  && currentCol+i < cols && currentRow+j >= 0 && currentRow+j < rows) {
            neighbors += grid[currentRow+i][currentCol+j];
          }
        }
      }
      neighbors -= grid[x][y];

      // if (grid[x][y] === 1){
      //
      // }
      // else{
      //   displayGrid();
      //   state = 3;
    }

  }
}
//}
function gameOver(){
  if (state === 3){
    fill("red");
    text("Game over",windowWidth/2 - 200,windowHeight/2-100);
  }
}
