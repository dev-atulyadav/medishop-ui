import React from "react";

export default function Section({ data }) {
  return (
    <section
      id="main"
      className="w-full p-4 flex flex-col justify-center items-center gap-4 mt-20 relative"
    >
      {data.map((value) => (
        <article
          key={value.btn[0]}
          className=" rounded-xl w-full flex flex-col justify-start items-center gap-4 relative"
        >
          <main className="sm:h-80 w-full sm:flex sm:justify-center sm:items-end overflow-hidden rounded-xl">
            <img src={value.image} className="w-full aspect-video" alt="" />
          </main>
          <main className="bg-slate-600 w-full text-white text-xl rounded-xl p-4 font-semibold flex flex-col items-start gap-4 sm:absolute sm:hover:backdrop-blur-[2px] sm:bg-[#00000091] sm:h-full sm:justify-center sm:items-center sm:text-3xl cursor-pointer sm:gap-8">
            <h1>{value.para}</h1>
            <button
              onClick={value.btn[1]}
              className={`px-4 py-2 hover:bg-green-400 hover:text-white text-lg  rounded-xl border-green-400 border-[1px] sm:self-center ${value.btn[2]}`}
            >
              {value.btn[0]}
            </button>
          </main>
        </article>
      ))}
    </section>
  );
}
