import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserData from "./UserData";

export default function Section() {
  const admin = JSON.parse(localStorage.getItem("admin"));
  if (admin) {
    return <Navigate to="/admin/home" />;
  }
  return (
    <>
      <section className="w-full p-4 flex flex-col justify-start items-center gap-4 mt-20 relative h-[30rem]">
        <article className=" rounded-xl w-full flex flex-col justify-start items-center gap-4 relative h-full">
          <main className="sm:h-full w-full sm:flex sm:justify-center sm:items-end overflow-hidden rounded-xl">
            <img
              src="https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="w-full h-full lg:h-auto aspect-video"
              alt=""
            />
          </main>
          <main className="bg-slate-600 w-full text-white text-xl rounded-xl p-4 font-semibold flex flex-col items-start gap-4 sm:absolute  sm:bg-[#00000091] sm:h-full sm:justify-center sm:items-center sm:text-3xl cursor-pointer sm:gap-">
            <div className="flex justify-center sm:items-center flex-col">
              <h2>Welcome Admin...</h2>
              <h3>Keep Checking user data.</h3>
            </div>
            <Link
              to="/admin/login"
              className="px-4 py-2 hover:bg-green-400 hover:text-white text-lg  rounded-xl border-green-400 border-[1px] sm:self-center"
            >
              Login Now
            </Link>
            <ToastContainer className="w-full sm:w-3/5 text-lg" />
          </main>
        </article>
      </section>
      {/* <UserData/> */}
    </>
  );
}
