import React, { useContext, useState } from "react";
import Icon from "../../assets/images/icon.png";
import { CgMenuRight } from "react-icons/cg";
import { IoHomeOutline } from "react-icons/io5";
import { GoInfo } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=" bg-slate-600 flex justify-between items-center px-6 py-2 fixed w-full top-0 z-10">
      <Link
        to="/"
        className="flex justify-center items-center text-xl sm:text-3xl uppercase font-bold gap-2 text-white cursor-pointer"
      >
        <img src={Icon} className="h-14 sm:h-16" alt="" />
        <h2>MediShop</h2>
      </Link>
      <nav className="flex uppercase font-semibold text-white">
        <ul className="flex justify-center items-center gap-8 h-full">
          <li>
            <Link to="/vendor">Vendor</Link>
          </li>
          <li>
            <Link to="/medicines">Medicines</Link>
          </li>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
