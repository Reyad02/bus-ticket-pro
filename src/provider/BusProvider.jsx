import { createContext, useState } from 'react';
export const BusContext = createContext();

const BusProvider = ({children}) => {
    const [bus, setBus] = useState([])
    const busDetails = { bus, setBus };
    return (
        <BusContext.Provider value={busDetails}>
            {children}
        </BusContext.Provider>
    );
};

export default BusProvider;