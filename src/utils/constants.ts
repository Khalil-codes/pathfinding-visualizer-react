import { Maze, Speed, Tile } from "./types";

export const MAX_ROWS = 39;
export const MAX_COLS = 49;

export const START_TILE_CONFIG: Tile = {
  row: 1,
  col: 1,
  distance: 0,
  isEnd: false,
  isWall: false,
  isPath: false,
  isStart: false,
  isTraversed: false,
  parent: null,
};

export const END_TILE_CONFIG: Tile = {
  row: MAX_ROWS - 2,
  col: MAX_COLS - 2,
  distance: 0,
  isEnd: false,
  isWall: false,
  isPath: false,
  isStart: false,
  isTraversed: false,
  parent: null,
};

export const MAZE_OPTIONS: Array<{ name: string; value: Maze }> = [
  { name: "No Maze", value: "NONE" },
  { name: "Binary Tree", value: "BINARY_TREE" },
  { name: "Recursive Division", value: "RECURSIVE_DIVISION" },
];

export const SPEED_OPTIONS: Array<{ name: string; value: Speed }> = [
  { name: "Slow", value: 2 },
  { name: "Medium", value: 1 },
  { name: "Fast", value: 0.5 },
];
