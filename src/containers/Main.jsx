import React from "react";
import HeaderImage from "../components/layout/header/header-image/HeaderImage";
import HeaderInfo from "../components/layout/header/header-info/HeaderInfo";

const Main = () => {
  return (
    <header className='header'>
      <HeaderImage />
      <HeaderInfo />
    </header>
  );
};

export default Main;
