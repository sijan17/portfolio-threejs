import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Last from "./components/Last";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import { ActiveContextProvider } from "./context/ActiveContext";

const App = () => {
  return (
    <ActiveContextProvider>
      <BrowserRouter>
        <Background />
        <div className="md:flex md:w-sreen md:items-center md:justify-between ">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intro" element={<Intro />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/last" element={<Last />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ActiveContextProvider>
  );
};

export default App;
