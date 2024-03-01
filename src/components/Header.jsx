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
import { Link } from "react-router-dom";

export default function Header() {
  const value = useContext(AuthContext);
  const {b,handleMenu} = useContext(MenuContext);
  const [navLinks, setNavLinks] = useState([
    { name: "Home", url: "/home",func:handleMenu, icon: Home },
    { name: "About", url: "/about",func:handleMenu, icon: About },
    { name: "Cart", url: "/cart",func:handleMenu, icon: Cart },
    {
      name: "User",
      url: "",
      func: value.handleForms,
      icon: User,
    },
  ]);

  return (
    <header className=" bg-green-400 flex justify-between items-center px-4 py-2 fixed w-full top-0 z-10">
      <Link to="/" className="flex justify-center items-center text-xl uppercase font-bold gap-2 text-white cursor-pointer">
        <img src={Icon} className="h-14" alt="" />
        <h2>MediShop</h2>
      </Link>
      <button
        onClick={handleMenu}
        className="cursor-pointer flex justify-center items-center"
      >
        <img src={Menu} className="h-10" alt="" />
      </button>
      {b ? <Nav navLinks={navLinks} /> : <></>}
    </header>
  );
}
