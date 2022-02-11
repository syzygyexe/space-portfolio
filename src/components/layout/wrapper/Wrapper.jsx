import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";

const Wrapper = ({ children }) => {
  const theme = useContext(ThemeContext);
  const isDark = theme.state.isDark;

  return (
    <div
      className={`container container__theme ${
        isDark ? "container__theme--dark" : "container__theme--light"
      }`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
