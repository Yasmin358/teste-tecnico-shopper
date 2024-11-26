import { createContext } from 'react';

interface RideContextType {
    activeStep: number | undefined;
    setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const rideContext = createContext<RideContextType | undefined>(undefined);

export default rideContext;