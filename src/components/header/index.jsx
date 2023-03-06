import React, {} from 'react';
import './styles.css'
export const HeaderState = {
    logo: '<GB />',
};

export const HeaderContext = React.createContext();

export const Header = ({ children }) => {
    return(
        <HeaderContext.Provider value={HeaderState}>
            <header>
                <div className='header'>
                    {children}
                </div>
            </header>
        </HeaderContext.Provider>
    );
};