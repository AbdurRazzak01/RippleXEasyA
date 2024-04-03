// NavigationContext.js
import React, { createContext, useState, useContext } from "react";

const NavigationContext = createContext();

export const useNavigation = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState("/");

  const navigate = (route) => {
    setCurrentRoute(route);
  };

  return (
    <NavigationContext.Provider value={{ currentRoute, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
};
