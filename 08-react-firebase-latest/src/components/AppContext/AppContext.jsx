import React, { createContext, useState } from 'react';

export const AppContext = createContext(null)

const AppContext = ({children}) => {
    const [users,setUsers] = useState({})
    console.log(props)
    return (
        <AppContext.Provider>
            {children}
        </AppContext.Provider>
    );{}
};

export default AppContext;