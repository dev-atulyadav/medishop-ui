import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import About from "./Pages/About";

export default function App() {
  return (
    
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<User />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
  );
}
