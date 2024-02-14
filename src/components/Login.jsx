import React from "react";
import { Link } from "react-router-dom";
import Close from '../assets/images/close.png'

export default function Login({handleForms}) {
  return (
    <div className=" rounded-xl w-full h-72 text-white self-center flex flex-col justify-center items-center bg-[#62626249] p-4 gap-4 relative border-2">
    <button onClick={handleForms} className="h-6 right-4 top-4 absolute transition-all hover:scale-75 rounded-full">
    <img src={Close} className="h-full" alt="" />
    </button>
      <h3 className="text-2xl font-bold self-start">Login Now</h3>
      <form className="flex h- w-full flex-col justify-center items-center gap-4">
        <input
          className="py-3 pl-4 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
          type="text"
          placeholder="Enter email"
        />
        <input
          className="pl-4 py-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
          type="password"
          placeholder="Enter password"
        />
        <button className="px-8 py-3 bg-green-400 uppercase  hover:bg-green-500 rounded-xl">
          Login
        </button>
      </form>
      <span className="flex gap-1.5">
        <p>Not a user?</p>
        <Link to="/Signup" className="text-blue-500 hover:underline">
          Register
        </Link>
      </span>
    </div>
  );
}
