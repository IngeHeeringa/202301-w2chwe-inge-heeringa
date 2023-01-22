import createGrid from "./createGrid/createGrid.js";
import initializeGeneration from "./initializeGeneration/initializeGeneration.js";
import World from "./World/World.js";

const rows = 20;
const columns = 35;
const initialGeneration = initializeGeneration(rows, columns, true);
const world = new World(rows, columns, initialGeneration);

createGrid(rows, columns, world);
setInterval(() => world.updateCurrentGeneration(world), 500);
