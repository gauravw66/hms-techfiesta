import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext/index"; // Ensure the correct path to AuthContext.js

const ProtectedRoute = ({ children }) => {
  const { userLoggedIn } = useAuth();

  if (!userLoggedIn) {
    // If the user is not logged in, redirect to the login page
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoute;
