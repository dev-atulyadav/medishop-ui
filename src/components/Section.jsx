import React from "react";
import Bg_1 from "../assets/images/bg-1.jpg";

export default function Section({ data }) {
  return (
    <section
      id="main"
      className="w-full p-4 flex flex-col justify-center items-center gap-4"
    >
      {data.map((value) => (
        <article
          key={value.btn[0]}
          className=" rounded-xl w-full flex flex-col justify-start items-center gap-4"
        >
          <main>
            <img src={value.image} className="rounded-xl" alt="" />
          </main>
          <main className="bg-slate-700 w-full text-white text-xl rounded-xl p-4 font-semibold flex flex-col items-start gap-4">
            <h1>{value.para}</h1>
            <button
              onClick={value.btn[1]}
              className={`px-4 py-2 hover:bg-green-400 hover:text-white text-lg  rounded-xl border-green-400 border-[1px] ${value.btn[2]}`}
            >
              {value.btn[0]}
            </button>
          </main>
        </article>
      ))}
    </section>
  );
}
