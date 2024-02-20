import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AuthState from "./context/form/AuthState";
import MenuState from "./context/menu/MenuState";
import User from "./Pages/User";
import About from "./Pages/About";

export default function App() {
  return (
    <MenuState>
      <AuthState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<User />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </AuthState>
    </MenuState>
  );
}
