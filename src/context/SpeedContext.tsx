import { createContext, useState } from "react";
import { Speed } from "../utils/types";

interface SpeedContextInterface {
  speed: Speed;
  setSpeed: (speed: Speed) => void;
}

export const SpeedContext = createContext<SpeedContextInterface | null>(null);

export const SpeedProvider = ({ children }: { children: React.ReactNode }) => {
  const [speed, setSpeed] = useState<Speed>(1);
  return (
    <SpeedContext.Provider value={{ speed, setSpeed }}>
      {children}
    </SpeedContext.Provider>
  );
};
