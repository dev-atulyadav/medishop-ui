import React from "react";
import Login from "../components/Customer/Login";
import Signup from "../components/Customer/Signup";
export default function Auth({ action }) {
  return (
    <section className="h-screen w-screen flex justify-center items-center bg-[#00000033] backdrop-blur-sm p-4 absolute top-0">
      {action == "register" ? <Signup /> : <Login />}
    </section>
  );
}
