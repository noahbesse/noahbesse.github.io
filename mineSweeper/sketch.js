//Minesweeper
//Noah Besse
//April 14,2018
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
}
function draw() {
  background(255);
  stroke(5);
  rect(0,0,600,600);
  displayEmptyGrid();

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
      if (random(100) < 25 ) {
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
function discorverNeighbors(){
  let next = createEmpty2dArray();
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {

      let neighbors = 0;
      for (let i=-1; i<=1; i++) {
        for (let j=-1; j<=1; j++) {
          // don't break on the edges
          if (x+i >= 0  && x+i < cols && y+j >= 0 && y+j < rows) {
            neighbors += grid[x+i][y+j];
          }
        }
      }
      if (neighbors === 0){
        return false;
      }

    }
  }
}
function mousePressed(){

  if (grid[currentCol][currentRow] === 0){
    displayGrid();
    gameOver();
  }
  if (grid[currentCol][currentRow] === 1){
    displayNeighbors();
  }
}
function gameOver(){
  text("GAME OVER",width/2,height/2);
}
