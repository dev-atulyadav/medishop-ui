import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsEmojiExpressionless, BsEmojiSurprise } from "react-icons/bs";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/form/AuthState";
export default function Signup() {
  const { handleForms } = useContext(AuthContext);
  const user = JSON.parse(localStorage.getItem("user"));
  const [visibility, setVisibility] = useState(false);
  const [userData, setUserData] = useState({});

  const handleUserData = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className=" rounded-xl text-white self-center flex flex-col justify-center items-center bg-[#62626249] p-4 gap-4 relative border-2 scale-75">
      <Link
        to="/"
        className="text-2xl right-4 top-4 absolute hover:text-red-500 rounded-full"
      >
        <AiOutlineCloseCircle />
      </Link>
      <h3 className="text-2xl font-bold self-start">SignUp</h3>
      <form className="h-full w-full">
        <div className="grid grid-cols-2 gap-4">
          <input
            className="py-3 pl-4 pr-8 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={handleUserData}
          />
          <input
            className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
            type="date"
            placeholder="Enter Date of Birth"
            name="dob"
            onChange={handleUserData}
          />
          <input
            className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleUserData}
          />
          <input
            className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
            type="text"
            placeholder="Enter Address"
            name="address"
            onChange={handleUserData}
          />
          <div className="w-full relative flex justify-center items-center">
            <input
              className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
              type={visibility ? "text" : "password"}
              placeholder={"Enter Password"}
              name={"password"}
              onChange={handleUserData}
            />
            <span
              onClick={() => setVisibility(!visibility)}
              className="absolute right-4 text-lg cursor-pointer"
            >
              {visibility ? <BsEmojiSurprise /> : <BsEmojiExpressionless />}
            </span>
          </div>
          <div className="w-full relative flex justify-center items-center">
            <input
              className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
              type={visibility ? "text" : "password"}
              placeholder={"Enter Confirm Password"}
              name={"confirmPassword"}
              onChange={handleUserData}
            />
            <span
              onClick={() => setVisibility(!visibility)}
              className="absolute right-4 text-lg cursor-pointer"
            >
              {visibility ? <BsEmojiSurprise /> : <BsEmojiExpressionless />}
            </span>
          </div>
          <input
            className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
            type="tel"
            placeholder="Enter Phone"
            name="phone"
            onChange={handleUserData}
          />
          <input
            className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
            type="text"
            placeholder="Enter Aadhar"
            name="adhar"
            onChange={handleUserData}
          />
        </div>
        <span className="text-[10px] lowercase px-4">
          <p>*password length should be greater than or equal to 8.</p>
          <p>
            *password must contains uppercase & lowercase alphabets ,Special
            characters,numbers.
          </p>
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (userData.password !== userData.confirmPassword) {
              toast.error("Invalid Password!");
            } else {
              handleForms(userData, "register");
            }
          }}
          className="px-7 py-2.5 bg-blue-400 uppercase  hover:bg-blue-500 rounded-xl mt-4"
        >
          Signup
        </button>
      </form>
      <span className="flex gap-1.5">
        <p>Already a user?</p>
        <Link to="/auth/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </span>
    </div>
  );
}
