import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className=" rounded-xl w-full h-72 text-white self-start flex flex-col justify-center items-center bg-[#0000001d] backdrop-blur-sm p-4 gap-4">
      <h3 className="text-2xl font-bold ">Login Now</h3>
      <form className="flex h- w-full flex-col justify-center items-center gap-4">
        <input
          className="py-3 pl-4 w-full rounded-xl bg-[#0000001f] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
          type="text"
          placeholder="Enter email"
        />
        <input
          className="pl-4 py-3 w-full rounded-xl bg-[#0000001f] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
          type="password"
          placeholder="Enter password"
        />
        <button className="px-8 py-3 bg-blue-400 uppercase rounded-xl">
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
