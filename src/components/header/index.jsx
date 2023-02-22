import React from 'react';
export const HeaderState = {
    logo: '<GB />',
};

export const HeaderContext = React.createContext();

export const Header = ({ children }) => {
    return(
        <HeaderContext.Provider value={HeaderState}>
            {children}
        </HeaderContext.Provider>
    );
};