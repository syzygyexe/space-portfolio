import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "./containers/Main";
import Switcher from "./components/layout/switcher/Switcher";
import VideoBackground from "./components/layout/video/VideoBackground";
import Wrapper from "./components/layout/wrapper/Wrapper";

import video from "./assets/video/galaxy.mp4";

import "./App.css";
import Navbar from "./components/layout/navbar/Navbar";

const App = () => {
  return (
    <BrowserRouter>
      <VideoBackground src={video} />
      <>
        <Wrapper>
          <Navbar>
            <Switcher />
          </Navbar>
          <Routes>
            <Route exact path='/' element={<Main />} />
          </Routes>
        </Wrapper>
      </>
    </BrowserRouter>
  );
};

export default App;
