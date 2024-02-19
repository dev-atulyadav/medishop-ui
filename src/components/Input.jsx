import React from "react";

export default function Input({ inputs }) {
  return (
    <input
      className="py-3 pl-4 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
      type={inputs.type}
      placeholder={"Enter " + inputs.value}
    />
  );
}
