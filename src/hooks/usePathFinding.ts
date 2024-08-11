import { useContext } from "react";
import { PathFindingContext } from "../context/PathFindingContext";

export const usePathFindingContext = () => {
  const context = useContext(PathFindingContext);
  if (context === undefined) {
    throw new Error(
      "usePathFindingContext must be used within a PathFindingProvider"
    );
  }
  return context;
};
