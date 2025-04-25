import React, { useContext, useEffect, useState } from "react";
import Icon from "../assets/images/icon.png";
import { CgMenuRight } from "react-icons/cg";
import Nav from "./Nav";
import { IoHomeOutline } from "react-icons/io5";
import { GoInfo } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MenuContext } from "../context/menu/MenuState";
import { Link } from "react-router-dom";

export default function Header() {
  const { b, handleMenu } = useContext(MenuContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const [navLinks, setNavLinks] = useState([
    { name: "Home", url: "/home", func: handleMenu, icon: <IoHomeOutline /> },
    { name: "About", url: "/about", func: handleMenu, icon: <GoInfo /> },
    { name: "Cart", url: "/cart", func: handleMenu, icon: <IoCartOutline /> },
    {
      name: user ? "User" : "Login",
      url: user ? "/my-profile" : "/auth/login",
      func: handleMenu,
      icon: <HiOutlineUserCircle />,
    },
  ]);
  useEffect(() => {
    if (user) {
      setNavLinks([...navLinks]);
    }
  }, []);

  return (
    <header className=" bg-slate-600 flex justify-between items-center px-6 py-2 fixed w-full top-0 z-10">
      <Link
        to="/"
        className="flex justify-center items-center text-xl sm:text-3xl uppercase font-bold gap-2 text-white cursor-pointer"
      >
        <img src={Icon} className="h-14 sm:h-16" alt="" />
        <h2>MediShop</h2>
      </Link>
      <button
        onClick={handleMenu}
        className="cursor-pointer flex justify-center items-center text-3xl sm:text-4xl text-white"
      >
        <CgMenuRight onClick={handleMenu} className="h-full w-full" />
      </button>
      {b ? <Nav navLinks={navLinks} /> : <></>}
    </header>
  );
}
