import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsEmojiExpressionless, BsEmojiSurprise } from "react-icons/bs";
import { AuthContext } from "../../context/form/AuthState";

export default function Login() {
  const { handleForms } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState({});
  const [visibility, setVisibility] = useState(false);

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className=" rounded-xl w-96 h-72 sm:w-80 text-white self-center flex flex-col justify-center items-center bg-[#62626249] p-4 gap-4 relative border-2">
      <Link
        to="/"
        className="text-2xl right-4 top-4 absolute hover:text-red-500 rounded-full"
      >
        <AiOutlineCloseCircle />
      </Link>
      <h3 className="text-2xl font-bold self-start">Login Now</h3>
      <form className="flex h- w-full flex-col justify-center items-center gap-4">
        <div className="w-full relative flex justify-center items-center">
          <input
            onChange={(e) => {
              let value = e.target.value;
              if (value != "") {
                setUserData({ ...userData, email: value });
              }
            }}
            type="email"
            placeholder="Enter Email"
            className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
            required
          />
        </div>
        <div className="w-full relative flex justify-center items-center">
          <input
            onChange={(e) => {
              setUserData({ ...userData, password: e.target.value });
            }}
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
        <button
          onClick={(e) => {
            e.preventDefault();
            handleForms(userData, "login");
          }}
          className="px-8 py-3 bg-green-400 uppercase  hover:bg-green-500 rounded-xl"
        >
          Login
        </button>
      </form>
      <span className="flex gap-1.5">
        <p>Not a user?</p>
        <Link to="/auth/register" className="text-blue-500 hover:underline">
          Register
        </Link>
      </span>
    </div>
  );
}
