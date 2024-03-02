import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import About from "./Pages/About";
import Cart from "./Pages/Cart";
import MyProfile from "./Pages/MyProfile";
import Login from "./components/Login";
import Forms from "./components/Forms";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<User />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/auth" element={<Forms />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </BrowserRouter>
  );
}
