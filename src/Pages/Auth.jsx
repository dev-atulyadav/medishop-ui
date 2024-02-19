import React, { useContext } from "react";
import Login from "../components/Login";
import AuthContext from "../context/form/AuthContext";
import Signup from "../components/Signup";
export default function Auth() {
  const value = useContext(AuthContext);
  return value.auth ? (
    <section className="h-screen w-screen flex justify-center items-center bg-[#00000033] backdrop-blur-sm p-4 absolute top-0">
      {value.auth == "Login" ? <Login /> : <Signup />}
    </section>
  ) : (
    <></>
  );
}
