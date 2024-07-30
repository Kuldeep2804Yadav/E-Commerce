import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../AuthContext/authContext";

const AuthenticatedRoute = () => {
  const { token } = useContext(AuthContext);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default AuthenticatedRoute;
