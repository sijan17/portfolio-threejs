import React, { createContext, useState } from "react";

export const ActiveContext = createContext();

export const ActiveContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [active, setActive] = useState("home");

  return (
    <ActiveContext.Provider
      value={{ active, setActive, isLoading, setIsLoading }}
    >
      {children}
    </ActiveContext.Provider>
  );
};
