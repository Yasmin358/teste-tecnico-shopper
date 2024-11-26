import React, { useContext } from "react";
import "./styles/App.css";
import RequestRide from "./components/requestRide.tsx";
import rideContext from "./context/rideContext.tsx";
import OptionsRide from "./components/optionsRide.tsx";
import HistoryRide from "./components/historyRide.tsx";

function App() {
  const context = useContext(rideContext);
    
  const getStepContent = (step: number | undefined) => {
        switch (step) {
          case 0:
            return <RequestRide />;
          case 1:
            return <OptionsRide />;
          case 2:
            return <HistoryRide />;
          default:
            throw new Error('Unknown step');
        }
  }
  return (
    <main className="App">
      { getStepContent(context?.activeStep) }
    </main>
  );
}
export default App;