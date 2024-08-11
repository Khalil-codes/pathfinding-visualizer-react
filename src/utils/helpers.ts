import { MAX_COLS, MAX_ROWS } from "./constants";
import { Grid, Tile } from "./types";

const createRow = (row: number, start: Tile, end: Tile) => {
  const current: Tile[] = [];
  for (let col = 0; col < MAX_COLS; col++) {
    current.push({
      row,
      col,
      isEnd: row === end.row && col === end.col,
      isWall: false,
      isPath: false,
      distance: Infinity,
      isStart: row === start.row && col === start.col,
      isTraversed: false,
      parent: null,
    });
  }
  return current;
};

export const createGrid = (start: Tile, end: Tile) => {
  const grid: Grid = [];
  for (let row = 0; row < MAX_ROWS; row++) {
    grid.push(createRow(row, start, end));
  }
  return grid;
};
