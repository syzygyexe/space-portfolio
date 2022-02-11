import React, { useContext, useLayoutEffect } from "react";
import { ThemeContext } from "./ThemeContext";
import "../App.css";

const SwitchButton = () => {
  const theme = useContext(ThemeContext);
  const isDark = theme.state.isDark;

  const toggleTheme = () => {
    if (isDark) {
      localStorage.setItem("isDark", JSON.stringify(!isDark));
      theme.dispatch({ type: "LIGHT_THEME" });
    } else {
      localStorage.setItem("isDark", JSON.stringify(!isDark));
      theme.dispatch({ type: "DARK_THEME" });
    }
  };

  useLayoutEffect(() => {
    const isDark = localStorage.getItem("isDark") === "true";
    if (isDark) {
      theme.dispatch({ type: "DARK_THEME" });
    }
  }, []);

  return (
    <button
      className={`btn ${isDark ? "btn-dark" : "btn-light"}`}
      onClick={toggleTheme}
    >
      {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default SwitchButton;
