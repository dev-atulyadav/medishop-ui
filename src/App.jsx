import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AuthState from "./context/form/AuthState";
import MenuState from "./context/menu/MenuState";

export default function App() {
  return (
    <MenuState>
      <AuthState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </AuthState>
    </MenuState>
  );
}
