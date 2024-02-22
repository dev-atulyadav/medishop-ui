import React, { useContext } from "react";
import Filter from "../assets/images/filter.png";
import Sort from "../assets/images/sort.png";
import FilterContext from "../context/filter/FilterContext";
FilterContext;
export default function FilterBar() {
  const { showFilter, handleFilterBox } = useContext(FilterContext);
  return (
    <article className=" w-full shadow-inset-xl mt-2 flex justify-between items-center text-sm">
      <button
        className={`flex gap-2 h-full uppercase justify-center items-center shadow-inset-xl border-r-2 border-white p-3.5 w-2/4 font-semibold ${
          showFilter ? "bg-gray-200" : "bg-gray-50"
        } md:hover:bg-gray-300`}
        onClick={handleFilterBox}
      >
        <img src={Filter} className="h-6" alt="" />
        <h3>Filter results</h3>
      </button>
      <button className="flex gap-2 h-full uppercase justify-center items-center bg-gray-50 shadow-inset-xl p-3.5 w-2/4 font-semibold md:hover:bg-gray-200">
        <img src={Sort} className="h-6" alt="" />
        <h3>Sort by name</h3>
      </button>
    </article>
  );
}
