import React from "react";
import "./App.css";
import Home from "./Components/Home/Home";
import Welcome from "./Components/Welcome/Welcome";

import Careers from "./Components/Careers/Careers";
// import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      {/* <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/careers" element={<Careers />} />
        </Routes>
      </BrowserRouter>
      <Home />
      <Careers /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
