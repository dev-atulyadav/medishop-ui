import { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaMeta } from "react-icons/fa6";
import { RiTwitterXFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Footer() {
  const [link, setLink] = useState([
    { name: "instagram", icon: <FaInstagram/>, url: "" },
    { name: "meta", icon: <FaMeta/>, url: "" },
    { name: "x", icon: <RiTwitterXFill/>, url: "" },
  ]);
  return (
    <footer className="bg-slate-600 rounded-t-xl text-white p-4 flex flex-col gap-4 justify-center items-center mt-6">
      <div className="text-lg w-full uppercase font-bold flex flex-col gap-2">
        <h3>Get Connected with us.</h3>
        <div className="flex gap-4">
          {link.map((value) => (
            <Link to="" key={value.name} className="text-xl">
              {value.icon}   
            </Link>
          ))}
        </div>
      </div>
      <div className="font-semibold flex gap-4 justify-center items-center sm:text-xl">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
      </div>
      <small className="font-semibold">© Copyright 2024-25</small>
    </footer>
  );
}
