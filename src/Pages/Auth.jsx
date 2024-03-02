import React, { useContext } from "react";
import Login from "../components/Login";
import { AuthContext } from "../context/form/AuthState";
import Signup from "../components/Signup";
export default function Auth() {
  const value = useContext(AuthContext);
  return (
    true && (
      <section className="h-screen w-screen flex justify-center items-center bg-[#00000033] backdrop-blur-sm p-4 absolute top-0">
        {value.auth == "Register" ? <Signup /> : <Login />}
      </section>
    )
  );
}
