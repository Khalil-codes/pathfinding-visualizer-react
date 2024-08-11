import { useContext } from "react";
import { TileContext } from "../context/TileContext";

export const useTileContext = () => {
  const context = useContext(TileContext);
  if (context === undefined) {
    throw new Error("useTileContext must be used within a TileProvider");
  }
  return context;
};
