import { useContext } from "react";
import { SpeedContext } from "../context/SpeedContext";

export const useSpeed = () => {
  const context = useContext(SpeedContext);
  if (context === undefined) {
    throw new Error("useSpeed must be used within a SpeedProvider");
  }
  return context;
};
