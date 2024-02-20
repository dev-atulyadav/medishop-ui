import React, { useContext, useState } from "react";
import Icon from "../assets/images/icon.png";
import Menu from "../assets/images/menu.png";
import Nav from "./Nav";
import Home from "../assets/images/home.png";
import Cart from "../assets/images/cart.png";
import About from "../assets/images/about.png";
import User from "../assets/images/user.png";
import AuthContext from "../context/form/AuthContext";
import MenuContext from "../context/menu/MenuContext";

export default function Header() {
  const value = useContext(AuthContext);
  const b = useContext(MenuContext);
  const [navLinks, setNavLinks] = useState([
    { name: "Home", url: "/home",func:b.handleMenu, icon: Home },
    { name: "About", url: "/about",func:b.handleMenu, icon: About },
    { name: "Cart", url: "/cart",func:b.handleMenu, icon: Cart },
    {
      name: "User",
      url: "",
      func: value.handleForms,
      icon: User,
    },
  ]);

  return (
    <header className=" bg-green-400 flex justify-between items-center px-4 py-2 relative">
      <div className="flex justify-center items-center text-xl uppercase font-bold gap-2 text-white cursor-pointer">
        <img src={Icon} className="h-14" alt="" />
        <h2>Medi-Shop</h2>
      </div>
      <button
        onClick={b.handleMenu}
        className="cursor-pointer flex justify-center items-center"
      >
        <img src={Menu} className="h-10" alt="" />
      </button>
      {b.b ? <Nav navLinks={navLinks} /> : <></>}
    </header>
  );
}
