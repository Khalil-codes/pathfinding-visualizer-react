export type Algorithm = "DIJKSTRA" | "A_STAR" | "BFS" | "DFS";

export type Maze = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION" | "RANDOM";

export type Grid = Tile[][];

export type Tile = {
  row: number;
  col: number;
  distance: number;
  isEnd: boolean;
  isWall: boolean;
  isPath: boolean;
  isStart: boolean;
  isTraversed: boolean;
  parent: Tile | null;
};

export type Speed = 2 | 1 | 0.5;
