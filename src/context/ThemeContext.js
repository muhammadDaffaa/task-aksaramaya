import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const initialState = {
  defaultColor: { bg: "black" },
  activeColor: { bg: "white" },
};
const ThemeContextProvider = ({ children }) => {
  const [theme] = useState(initialState);

  return (
    <ThemeContext.Provider value={[theme]}>{children}</ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
