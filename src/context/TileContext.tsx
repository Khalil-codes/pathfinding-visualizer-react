import { createContext, useState } from "react";
import { Tile } from "../utils/types";
import { END_TILE_CONFIG, START_TILE_CONFIG } from "../utils/constants";

interface TileContextInterface {
  start: Tile;
  setStart: (start: Tile) => void;
  end: Tile;
  setEnd: (end: Tile) => void;
}

export const TileContext = createContext<TileContextInterface | null>(null);

export const TileProvider = ({ children }: { children: React.ReactNode }) => {
  const [start, setStart] = useState<Tile>(START_TILE_CONFIG);
  const [end, setEnd] = useState<Tile>(END_TILE_CONFIG);

  return (
    <TileContext.Provider value={{ start, setStart, end, setEnd }}>
      {children}
    </TileContext.Provider>
  );
};
