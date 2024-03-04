import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsEmojiExpressionless, BsEmojiSurprise } from "react-icons/bs";

export default function AdminLogin() {
  const [visibility, setVisibility] = useState(false);

  return (
    <section className="h-[30rem] w-screen flex justify-center items-center absolute top-20 p-4">
      <article className="h-full w-full flex justify-center items-center backdrop-blur-[5px] bg-[#00000044] rounded-xl">
        <div className=" rounded-xl w-96 h-72 sm:w-80 text-white self-center flex flex-col justify-center items-center bg-[#62626249] p-4 gap-4 relative border-2">
          <Link
            to="/admin"
            className="text-2xl right-4 top-4 absolute hover:text-red-500 rounded-full"
          >
            <AiOutlineCloseCircle />
          </Link>
          <h3 className="text-2xl font-bold self-start">Admin Login</h3>
          <form className="flex h- w-full flex-col justify-center items-center gap-4">
            <div className="w-full relative flex justify-center items-center">
              <input
                type="email"
                placeholder="Enter Email"
                className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
                required
              />
            </div>
            <div className="w-full relative flex justify-center items-center">
              <input
                type={visibility ? "text" : "password"}
                placeholder="Enter password"
                className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
                required
              />
              <span
                onClick={() => setVisibility(!visibility)}
                className="absolute right-4 text-lg cursor-pointer"
              >
                {visibility ? <BsEmojiSurprise /> : <BsEmojiExpressionless />}
              </span>
            </div>
            <button className="px-8 py-3 bg-green-400 uppercase  hover:bg-green-500 rounded-xl">
              Login
            </button>
          </form>
        </div>
      </article>
    </section>
  );
}
