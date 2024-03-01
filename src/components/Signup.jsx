import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/form/AuthContext";
import Input from "./Input";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Signup() {
  const value = useContext(AuthContext);
  const [inputs] = useState([
    // { value: "name", type: "text" },
    { value: "email", type: "email" },
    { value: "dob", type: "date" },
    { value: "password", type: "password" },
    // { value: "address", type: "text" },
    // { value: "phone", type: "tel" },
    // { value: "adhar", type: "text" },
  ]);
  return (
    <div className=" rounded-xl w-96 text-white self-center flex flex-col justify-center items-center bg-[#62626249] p-4 gap-4 relative border-2">
      <button
        onClick={value.handleForms}
        className="text-2xl right-4 top-4 absolute hover:text-red-500 rounded-full"
      >
        <AiOutlineCloseCircle />
      </button>
      <h3 className="text-2xl font-bold self-start">SignUp</h3>
      <form className="flex h-full w-full flex-col justify-center items-center gap-4">
        {inputs.map((value) => (
          <Input key={value.value} inputs={value} />
        ))}
        <span className="text-[10px] lowercase px-4">
        <p>
        *password length should be greater than or equal to 8.
        </p>
        <p>*password must contains uppercase & lowercase alphabets ,Special characters,numbers.</p>
        </span>
        <button className="px-7 py-2.5 bg-blue-400 uppercase  hover:bg-blue-500 rounded-xl">
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
