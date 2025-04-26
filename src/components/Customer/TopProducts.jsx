import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TopProducts() {
  const [catogeries] = useState([
    {
      path: "/product/hair-care",
      img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443670_hairr.webp?format=auto",
    },
    {
      path: "/product/skin-care",
      img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443647_skinn.webp?format=auto",
    },
    {
      path: "/product/baby-care",
      img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443714_baby.webp?format=auto",
    },
    {
      path: "/product/oral-care",
      img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443695_orall.webp?format=auto",
    },
    {
      path: "/product/men-grooming",
      img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443735_menn.webp?format=auto",
    },
    {
      path: "/product/pet-care",
      img: "https://onemg.gumlet.io/diagnostics%2F2023-11%2F1699443746_pett.webp?format=auto",
    },
  ]);
  return (
    <section className=" w-full p-2 flex flex-col justify-center items-center gap-6">
      <main className="p-2 flex justify-center items-start">
        <h2 className="text-2xl sm:text-3xl p-2 border-b-8 border-t-8 border-slate-600 text-slate-600 border-double font-bold uppercase">
          Products Categories
        </h2>
      </main>
      <main className="w-full bg-gray-200 p-4 flex justify-center md:justify-between items-center gap-3 rounded-xl shadow-inset-3xl flex-wrap">
        {catogeries.map((value, index) => (
          <Link key={index} to={value.path}>
            <img src={value.img} className="h-32 rounded-xl hover:scale-105 transition-all" />
          </Link>
        ))}
      </main>
    </section>
  );
}
