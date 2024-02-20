import { useState } from "react";
import Instagram from "../assets/images/instagram.png";
import Meta from "../assets/images/meta.png";
import X from "../assets/images/x.png";
import { Link } from "react-router-dom";

export default function Footer() {
  const [link, setLink] = useState([
    { name: "instagram", icon: Instagram, url: "" },
    { name: "meta", icon: Meta, url: "" },
    { name: "x", icon: X, url: "" },
  ]);
  return (
    <footer className="bg-slate-700 rounded-t-xl text-white p-4 flex flex-col gap-4 justify-center items-center mt-6">
      <div className="text-lg w-full uppercase font-bold flex flex-col gap-2">
        <h3>Get Connected with us.</h3>
        <div className="flex gap-4">
          {link.map((value) => (
            <a href="" key={value.name}>
              <img
                src={value.icon}
                className="h-8 bg-white p-0.5 rounded-full"
                alt=""
              />
            </a>
          ))}
        </div>
      </div>
      <div className="font-semibold flex gap-4 justify-center items-center">
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/service">Service</Link>
      </div>
      <small className="font-semibold">© Copyright 2024-25</small>
    </footer>
  );
}
