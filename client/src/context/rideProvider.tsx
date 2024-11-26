import React from 'react';
import { useState, ReactNode } from 'react';
import RideContext from './rideContext.tsx';

interface RideProviderProps {
    children: ReactNode;
}

function RideProvider({ children }: RideProviderProps) {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <RideContext.Provider value={{ 
          activeStep,
          setActiveStep,
        }}>
        { children }
        </RideContext.Provider>
    );
}

export default RideProvider;