import initializeGenerations from "./initializeGenerations/initializeGenerations.js";
import World from "./World/World.js";

const rows = 20;
const columns = 20;
const initialGeneration = initializeGenerations(rows, columns, true);
const world = new World(rows, columns, initialGeneration);

setInterval(() => world.updateCurrentGeneration(), 1000);
