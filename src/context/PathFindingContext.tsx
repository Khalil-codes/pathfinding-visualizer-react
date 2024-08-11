import { createContext, useState } from "react";
import { Algorithm, Grid, Maze } from "../utils/types";
import { createGrid } from "../utils/helpers";
import { END_TILE_CONFIG, START_TILE_CONFIG } from "../utils/constants";

interface PathFindingContextInterface {
  algorithm: Algorithm;
  setAlgorithm: (algorithm: Algorithm) => void;
  maze: Maze;
  setMaze: (maze: Maze) => void;
  grid: Grid;
  setGrid: (grid: Grid) => void;
  isGraphVisualized: boolean;
  setIsGraphVisualized: (isGraphVisualized: boolean) => void;
}

export const PathFindingContext =
  createContext<PathFindingContextInterface | null>(null);

export const PathFindingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [algorithm, setAlgorithm] = useState<Algorithm>("BFS");
  const [maze, setMaze] = useState<Maze>("NONE");
  const [grid, setGrid] = useState<Grid>(
    createGrid(START_TILE_CONFIG, END_TILE_CONFIG)
  );
  const [isGraphVisualized, setIsGraphVisualized] = useState<boolean>(false);

  return (
    <PathFindingContext.Provider
      value={{
        algorithm,
        setAlgorithm,
        maze,
        setMaze,
        grid,
        setGrid,
        isGraphVisualized,
        setIsGraphVisualized,
      }}
    >
      {children}
    </PathFindingContext.Provider>
  );
};
