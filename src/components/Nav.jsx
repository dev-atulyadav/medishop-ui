import React, { useContext } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import MenuContext from "../context/menu/MenuContext";

export default function Nav({ navLinks }) {
  const handleMenu = useContext(MenuContext).handleMenu;
  return (
    <nav className="absolute z-10 right-0 top-0 h-screen w-full bg-[#afaeae2b] backdrop-blur-sm flex justify-end">
      <div className=" h-full flex flex-col gap-10 bg-[#00000037] backdrop-blur-sm p-4">
        <button
          onClick={handleMenu}
          className=" p-1.5 text-3xl text-white hover:text-red-500 rounded-full transition-all"
        >
          <AiOutlineCloseCircle/>
        </button>
        <div className="flex flex-col gap-6 h-full text-white text-3xl">
          {navLinks.map((value) => (
            <Link
              to={value.url}
              key={value.name}
              onClick={value.func}
              className="p-1.5 transition-all rounded-full"
            ><span className="hover:text-gray-400">
              {value.icon}
            </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
