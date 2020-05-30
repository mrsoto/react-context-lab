import React from "react";
import { useChrono, initialContextValue } from "./useChrono";
import { useContext } from "react";

const Context = React.createContext(initialContextValue);

export const useChronoContext = () => useContext(Context).handlers;

export const ChronoProvider = ({ children }) => {
  const chrono = useChrono();
  return (
    <React.Fragment>
      <Context.Provider value={chrono}>{children}</Context.Provider>
    </React.Fragment>
  );
};
