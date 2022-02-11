import React, { createContext, useReducer } from "react";

export const ThemeContext = createContext();

const initialState = {
  isDark: false,
};

const themeReducer = (state, action) => {
  switch (action.type) {
    case "LIGHT_THEME":
      return { isDark: false };
    case "DARK_THEME":
      return { isDark: true };
    default:
      return state;
  }
};

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}
