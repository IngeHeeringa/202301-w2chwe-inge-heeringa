import initializeGeneration from "./initializeGeneration/initializeGeneration.js";
import World from "./World/World.js";

const rows = 20;
const columns = 20;
const initialGeneration = initializeGeneration(rows, columns, true);
const world = new World(rows, columns, initialGeneration);

setInterval(() => world.updateCurrentGeneration(), 1000);
