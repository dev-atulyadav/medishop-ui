import React from "react";

export default function ShortDetails({ details }) {
  return (
    <div className="w-full p-2 flex flex-col rounded-xl justify-center items-center gap-4 bg-gray-200">
      {details.map((value) => (
        <>
          <h2 className="text-2xl uppercase w-full bg-gray-100 text-center font-bold rounded-xl shadow-inset-xl p-3">
            {value.heading}
          </h2>
          <p className="">{value.para}</p>
        </>
      ))}
    </div>
  );
}
