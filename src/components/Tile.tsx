import type { Tile as TileType } from "../utils/types";
import cn from "../utils/cn";
import { MAX_COLS, MAX_ROWS } from "../utils/constants";
import { HTMLAttributes } from "react";

type Props = TileType & HTMLAttributes<HTMLDivElement>;

const Tile = ({
  col,
  row,
  isTraversed,
  isStart,
  isEnd,
  isWall,
  isPath,
  ...rest
}: Props) => {
  return (
    <div
      {...rest}
      id={`tile-${row}-${col}`}
      className={cn(
        "xs:w-[8px] xs:h-[8px] h-[7px] w-[7px] border-r border-t border-sky-200 md:h-[15px] md:w-[15px] lg:h-[17px] lg:w-[17px]",
        {
          "bg-cyan-400": isTraversed,
          "bg-green-400": isStart,
          "bg-red-400": isEnd,
          "bg-gray-200": isWall,
          "bg-green-600": isPath,
        },
        {
          "border-b": row === MAX_ROWS - 1,
          "border-r": col === MAX_COLS - 1,
          "border-l": col === 0,
          "border-t": row === 0,
        }
      )}
    />
  );
};

export default Tile;
