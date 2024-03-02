import React, { useContext, useState } from "react";
import { FilterContext } from "../context/filter/FilterState";

export default function FilterBox() {
  const [checkBoxs] = useState([
    { title: "most Selling", func: () => {} },
    { title: "Top Selling", func: () => {} },
    { title: "Value for money", func: () => {} },
    { title: "Fast delivery", func: () => {} },
    { title: "Easy return", func: () => {} },
    { title: "Cash on delivery", func: () => {} },
  ]);
  const { showFilter } = useContext(FilterContext);

  return (
    <section className="w-full h-screen p-2">
      <article className=" w-full h-full bg-gray-100 shadow-inset-xl rounded-xl p-4">
        <form className="flex flex-col justify-center items-start gap-4 w-full">
          {checkBoxs.map((value, index) => (
            <div key={index} className="flex gap-3 text-xl capitalize">
              <input
                type="checkbox"
                id={value.title}
                className="w-8 cursor-pointer"
              />
              <label htmlFor={value.title} className="cursor-pointer">
                {value.title}
              </label>
            </div>
          ))}
          <button className="px-8 py-2.5 font-semibold text-slate-700 self-center border-[1px] border-slate-700 hover:bg-slate-700 text-xl uppercase hover:text-white rounded-xl">
            Filter
          </button>
        </form>
      </article>
    </section>
  );
}
