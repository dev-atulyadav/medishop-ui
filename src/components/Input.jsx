import React, { useState } from "react";
import { BsEmojiExpressionless } from "react-icons/bs";
import { BsEmojiSurprise } from "react-icons/bs";

export default function Input({ inputs }) {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className="w-full relative flex justify-center items-center">
      <input
        className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
        type={
          inputs.value !== "password"? inputs.type : visibility ? "text" : "password"
        }
        placeholder={"Enter " + inputs.value}
      />
      {inputs.value == "password" && (
        <span
          onClick={() => setVisibility(!visibility)}
          className="absolute right-4 text-lg cursor-pointer"
        >
          {visibility ? <BsEmojiSurprise /> : <BsEmojiExpressionless />}
        </span>
      )}
    </div>
  );
}
