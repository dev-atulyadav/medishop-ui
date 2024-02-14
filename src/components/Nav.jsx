import React from "react";
import Close from "../assets/images/close.png";
import { Link } from "react-router-dom";

export default function Nav({ navLinks, handleMenu }) {
  return (
    <nav className="absolute z-10 right-0 top-0 h-screen w-full bg-[#afaeae2b] backdrop-blur-sm flex justify-end">
      <div className=" h-full flex flex-col gap-10 bg-[#00000037] backdrop-blur-sm p-4">
        <button
          onClick={handleMenu}
          className="hover:bg-red-500 p-1.5 rounded-full hover:-rotate-180 transition-all"
        >
          <img src={Close} className="h-7" alt="" />
        </button>
        <div className="flex flex-col gap-6 h-full">
          {navLinks.map((value) => (
            <Link
              to={value.url}
              target="_blank"
              key={value.name}
              className="p-1.5 sm:hover:-rotate-180 transition-all rounded-full"
            >
              <img src={value.icon} className="h-7" alt="" />
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
