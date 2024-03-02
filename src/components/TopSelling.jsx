import React, { useState } from "react";
import Hansaplast from "../assets/svgs/hansaplast.svg";
import HealthKart from "../assets/svgs/HealthKart.svg";
import Mankind from "../assets/svgs/Mankind.svg";
import Dabur from "../assets/svgs/Dabur.svg";
import Johnson from "../assets/svgs/johnson.svg";
import { Link } from "react-router-dom";

export default function TopSelling() {
  const [brands] = useState([
    {
      name: "Healthkart",
      logo: HealthKart,
    },
    {
      name: "Mankind",
      logo: Mankind,
    },
    {
      name: "Hansaplast",
      logo: Hansaplast,
    },
    {
      name: "Dabur",
      logo: Dabur,
    },
    {
      name: "Baidyanath",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Baidyanath_logo.png",
    },
    {
      name: "Johson",
      logo: Johnson,
    },
  ]);
  return (
    <section className=" w-full p-2 flex flex-col justify-center items-center gap-6">
      <main className="p-2 flex justify-center items-start">
        <h2 className="text-2xl sm:text-3xl p-2 border-b-8 border-t-8 border-slate-600 text-slate-600 border-double font-bold uppercase">
          Top Selling Brands
        </h2>
      </main>
      <main className="w-full bg-gray-200 p-4 flex justify-start items-center flex-col sm:flex-row gap-3 rounded-xl shadow-inset-3xl">
        {brands.map((brand, index) => (
          <Link
            key={index}
            className="h-28 bg-white rounded-xl shadow-inset-3xl w-full sm:w-56 flex justify-center items-center p-2"
          >
            <img
              src={brand.logo}
              className="h-full hover:scale-75 transition-all"
              alt=""
            />
          </Link>
        ))}
      </main>
    </section>
  );
}
