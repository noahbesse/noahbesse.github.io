//Minesweeper
//Noah Besse
//April 14,2018
let currentAmountOfMines
let maxAmountOfMines = 10;
let rows = 10;
let cols = 10;
let grid;
let cellSize;

function setup() {
  currentAmountOfMines = 0;
  createCanvas(600, 600);
  cellSize = width / cols;
  grid = createRandom2dArray(cols, rows);
}

function draw() {
  background(255);
  displayGrid();
}

function displayGrid() {
  for (let x=0; x<cols; x++) {
    for (let y=0; y<rows; y++) {
      if (grid[x][y] === 0 && currentAmountOfMines < maxAmountOfMines) {

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
function detectMines(){
  for (let i = 0; i < rows; i++){
    for (let j = 0; j < cols; j++){
      if (grid[i][j] === 1){
        if grid[i + 1][j] ||
      }
    }
  }
}
