import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Background from "./components/Background";
import Contact from "./components/Contact";
import Getintouch from "./components/Getintouch";
import Home from "./components/Home";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import { ActiveContextProvider } from "./context/ActiveContext";

const App = () => {
  return (
    <ActiveContextProvider>
      <BrowserRouter>
        <Background />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/intro" element={<Intro />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/getintouch" element={<Getintouch />} />
        </Routes>
      </BrowserRouter>
    </ActiveContextProvider>
  );
};

export default App;
