import React, { createContext, useState } from 'react';
 export const AuthContext = React.createContext();

export const AuthContextProvider = (props)=>{
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    return <AuthContext.Provider value={{ token, setToken }}>
 {props.children}
    </AuthContext.Provider>
}