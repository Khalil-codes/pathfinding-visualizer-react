import React, { useState } from "react";
import { usePathFinding } from "../hooks/usePathFinding";
import cn from "../utils/cn";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import Tile from "./Tile";
import { checkIfStartOrEnd, createNewGrid } from "../utils/helpers";

type Props = {
  isVisualizationRunningRef: React.MutableRefObject<boolean>;
};

const Grid = ({ isVisualizationRunningRef }: Props) => {
  const { grid, setGrid } = usePathFinding();
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseDown = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col))
      return;
    setIsMouseDown(true);
    const _grid = createNewGrid(grid, row, col);
    setGrid(_grid);
  };
  const handleMouseUp = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col))
      return;
    setIsMouseDown(false);
  };

  const handleMouseEnter = (row: number, col: number) => {
    if (isVisualizationRunningRef.current || checkIfStartOrEnd(row, col))
      return;
    if (isMouseDown) {
      const _grid = createNewGrid(grid, row, col);
      setGrid(_grid);
    }
  };

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center",
        // Height of the grid
        `lg:min-h-[calc(${MAX_ROWS}*17px)] md:min-h-[calc(${MAX_ROWS}*15px)] xs:min-h-[calc(${MAX_ROWS}*8px)] min-h-[calc(${MAX_ROWS}*7px)]`,
        // Width of the grid
        `lg:min-w-[calc(${MAX_COLS}*17px)] md:min-w-[calc(${MAX_COLS}*15px)] xs:min-w-[calc(${MAX_COLS}*8px)] min-w-[calc(${MAX_COLS}*7px)]`
      )}>
      {grid.map((row, rowIdx) => (
        <div key={rowIdx} className="flex">
          {row.map((tile, colIdx) => (
            <Tile
              {...tile}
              key={`tile ${rowIdx}-${colIdx}`}
              onMouseDown={() => handleMouseDown(tile.row, tile.col)}
              onMouseEnter={() => handleMouseEnter(tile.row, tile.col)}
              onMouseUp={() => handleMouseUp(tile.row, tile.col)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default Grid;
