import React, { useState } from "react";
import Icon from "../assets/images/icon.png";
import Menu from "../assets/images/menu.png";
import Nav from "./Nav";
import Home from "../assets/images/home.png";
import Help from "../assets/images/support.png";
import About from "../assets/images/about.png";
import User from "../assets/images/user.png";

export default function Header() {
  const [navLinks, setNavLinks] = useState([
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: About },
    { name: "Help", url: "/help&support", icon: Help },
    { name: "User", url: "", icon: User },
  ]);
  const [b, setB] = useState(false);
  const handleMenu = () => {
    setB(!b);
  };
  return (
    <header className=" bg-green-400 flex justify-between items-center px-4 py-2 relative">
      <div className="flex justify-center items-center text-xl uppercase font-bold gap-2 text-white cursor-pointer">
        <img src={Icon} className="h-14" alt="" />
        <h2>Medi-Shop</h2>
      </div>
      <button
        onClick={handleMenu}
        className="cursor-pointer flex justify-center items-center"
      >
        <img src={Menu} className="h-10" alt="" />
      </button>
      {b ? <Nav navLinks={navLinks} handleMenu={handleMenu} /> : <></>}
    </header>
  );
}
