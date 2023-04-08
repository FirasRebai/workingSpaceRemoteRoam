import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Home from "./pages/home";
import CoworkingSpaces from "./pages/coworkingSpaces";
import SingleSpace from "./pages/singleSpace";
import Error from "./pages/Error";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/coworking-space" Component={CoworkingSpaces} />
        <Route path="/coworking-space/:slug" Component={SingleSpace} />
        <Route path="*" Component={Error} />
      </Routes>
    </>
  );
}

export default App;
