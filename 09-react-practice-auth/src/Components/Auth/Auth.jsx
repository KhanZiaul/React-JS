import React, { createContext } from 'react';
export const parentAuth = createContext(null)

const Auth = ({children}) => {

    const info = {
        user:'khan zia'
    }
    
    return (
        <parentAuth.Provider value={info}>
            {
                children
            }
        </parentAuth.Provider>
    );
};

export default Auth;