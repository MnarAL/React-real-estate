import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }) => {
  const location = useLocation();

  return isAuthenticated ? (
    children
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};

export default PrivateRoute;
