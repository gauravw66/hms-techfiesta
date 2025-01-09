// src/context/LoadingContext.js
import React, { createContext, useState, useContext } from "react";
import Loader from "../components/Loader";

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {loading ? <Loader /> : children}
    </LoadingContext.Provider>
  );
};
