import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Close from "../assets/images/close.png";
import AuthContext from "../context/form/AuthContext";
import Input from "./Input";

export default function Signup() {
  const value = useContext(AuthContext);
  const [inputs] = useState([
    { value: "name", type: "text" },
    { value: "dob", type: "date" },
    { value: "email", type: "email" },
    { value: "password", type: "password" },
    { value: "address", type: "text" },
    { value: "phone", type: "tel" },
    { value: "adhar", type: "text" },
  ]);
  return (
    <div className=" rounded-xl w-full h- text-white self-center flex flex-col justify-center items-center bg-[#62626249] p-4 gap-4 relative border-2">
      <button
        onClick={value.handleForms}
        className="h-6 right-4 top-4 absolute transition-all hover:scale-75 rounded-full"
      >
        <img src={Close} className="h-full" alt="" />
      </button>
      <h3 className="text-2xl font-bold self-start">SignUp</h3>
      <form className="flex h- w-full flex-col justify-center items-center gap-4">
        {inputs.map((value) => (
          <Input key={value.value} inputs={value} />
        ))}
        <button className="px-8 py-3 bg-blue-400 uppercase  hover:bg-blue-500 rounded-xl">
          Signup
        </button>
      </form>
      <span className="flex gap-1.5">
        <p>Already a user?</p>
        <Link onClick={value.handleForms} className="text-blue-500 hover:underline">
          Login
        </Link>
      </span>
    </div>
  );
}
