import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (userData) => {},
  logOut: () => {},
});

export const AuthContextProvider = (props) => {
  const initialData = JSON.parse(localStorage.getItem("Userdata")) || {};
  
  const [Userdata, setUserdata] = useState(initialData);
  const isLoggedIn = !!Userdata.idToken;

  const loginHandler = (Userdata) => {
    if (Userdata.idToken != null) {
      localStorage.setItem("Userdata", JSON.stringify(Userdata));
      setUserdata(Userdata);
      setTimeout(() => {
        localStorage.removeItem("Userdata");
        setUserdata(null);
        alert("Session Time has Expired! Please Login Again");
      }, 500000); 
    }
  };

  const logOutHandler = () => {
    localStorage.removeItem("Userdata");
    setUserdata({});
  };

  useEffect(() => {
    if (initialData && initialData.idToken) {
      loginHandler(initialData);
    }
  }, []);

  const contextValue = {
    idToken: Userdata.idToken,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logOut: logOutHandler,
    Userdata:Userdata
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
