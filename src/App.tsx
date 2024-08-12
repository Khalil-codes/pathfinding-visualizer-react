import { useRef } from "react";
import Grid from "./components/Grid";
import { PathFindingProvider } from "./context/PathFindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";
import Navbar from "./components/Nav";

function App() {
  const isVisualizationRunningRef = useRef(false);
  return (
    <PathFindingProvider>
      <TileProvider>
        <SpeedProvider>
          <div className="flex h-screen w-screen flex-col">
            <Navbar />
            <Grid isVisualizationRunningRef={isVisualizationRunningRef} />
          </div>
        </SpeedProvider>
      </TileProvider>
    </PathFindingProvider>
  );
}

export default App;
