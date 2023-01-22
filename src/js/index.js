import createGrid from "./createGrid/createGrid.js";
import initializeGeneration from "./initializeGeneration/initializeGeneration.js";
import World from "./World/World.js";

const rows = 20;
const columns = 30;
const initialGeneration = initializeGeneration(rows, columns, true);
const world = new World(rows, columns, initialGeneration);

createGrid(rows, columns, world);

const playButton = document.querySelector(".controls__button--play");
const pauseButton = document.querySelector(".controls__button--pause");
let updatedBoard;
let isPaused = false;

const updateWorld = () => {
  world.updateCurrentGeneration(world);
  document.querySelector(".world").innerHTML = "";
  createGrid(world.rows, world.columns, world);
};

playButton.addEventListener("click", () => {
  if (!isPaused) {
    updatedBoard = setInterval(updateWorld, 500);
  }

  isPaused = true;
});

pauseButton.addEventListener("click", () => {
  clearInterval(updatedBoard);
  isPaused = false;
});
