import React from "react";
import { Navigate } from "react-router-dom";
import { isTokenValid } from "./TokenVerify.js";


function ProtectedRoute({ children }) {
  if (!isTokenValid()) {
    return <Navigate to="/user/signin" replace />;
  }

  return children;
}

export default ProtectedRoute;
