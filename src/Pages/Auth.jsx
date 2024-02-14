import React from "react";
import Login from "../components/Login";

export default function Auth({ auth,handleForms }) {
  return auth ? (
    <section className="h-screen w-screen flex justify-center items-center bg-[#00000033] backdrop-blur-sm p-4 absolute top-0">
      {auth ? <Login handleForms={handleForms}/> : <></>}
    </section>
  ) : (
    <></>
  );
}
