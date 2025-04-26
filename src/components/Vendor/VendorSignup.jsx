import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsEmojiExpressionless, BsEmojiSurprise } from "react-icons/bs";
import vendorImage from "../../assets/images/vendor-bg.jpg";
import { vendorRegister } from "../../../lib/action";
import { toast } from "react-toastify";

export default function VendorSignup() {
  const vendor = JSON.parse(localStorage.getItem("vendor"));
  const [vendorData, setVendorData] = useState({});
  const [visibility, setVisibility] = useState(false);

  if (vendor && vendor.vendorStatus === "active") {
    return <Navigate to="/vendor" />;
  }

  const handleVendorRegister = async (e) => {
    e.preventDefault();
    const response = await vendorRegister(vendorData);
    console.log(response);
    if (response.status === 201) {
      localStorage.setItem("vendor", JSON.stringify(response.data));
      toast.success(response.data.message);
      window.location.href = "/vendor/login";
    }
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center mt-12 py-8 px-3 sm:p-8 rounded-xl overflow-hidden ">
      <article className="w-full h-full flex justify-center items-center relative p-10">
        <img
          src={vendorImage}
          alt=""
          className="w-full h-full object-cover absolute rounded-xl"
        />
        <div className="rounded-xl max-w-3xl text-white self-center flex flex-col justify-center items-center backdrop-blur-sm bg-[#62626249] p-4 sm:p-6 gap-4 relative border-2">
          <Link
            to="/"
            className="text-2xl right-4 top-4 absolute hover:text-red-500 rounded-full"
          >
            <AiOutlineCloseCircle />
          </Link>
          <h3 className="text-2xl font-bold self-start">Vendor Signup</h3>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
            <div className="w-full relative">
              <input
                onChange={(e) => {
                  setVendorData({ ...vendorData, name: e.target.value });
                }}
                type="text"
                placeholder="Enter Your Name"
                className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
                required
              />
            </div>
            <div className="w-full relative">
              <input
                onChange={(e) => {
                  setVendorData({ ...vendorData, email: e.target.value });
                }}
                type="email"
                placeholder="Enter Email"
                className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
                required
              />
            </div>
            <div className="w-full relative">
              <input
                onChange={(e) => {
                  setVendorData({ ...vendorData, phone: e.target.value });
                }}
                type="tel"
                placeholder="Enter Phone Number"
                className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
                required
              />
            </div>
            <div className="w-full relative">
              <input
                onChange={(e) => {
                  setVendorData({ ...vendorData, adhar: e.target.value });
                }}
                type="text"
                placeholder="Enter Aadhar Number"
                className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
                required
              />
            </div>
            <div className="w-full relative">
              <input
                onChange={(e) => {
                  setVendorData({ ...vendorData, password: e.target.value });
                }}
                type={visibility ? "text" : "password"}
                placeholder="Enter password"
                className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
                required
              />
              <span
                onClick={() => setVisibility(!visibility)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-lg cursor-pointer"
              >
                {visibility ? <BsEmojiSurprise /> : <BsEmojiExpressionless />}
              </span>
            </div>
            <div className="w-full relative">
              <input
                onChange={(e) => {
                  setVendorData({
                    ...vendorData,
                    confirmPassword: e.target.value,
                  });
                }}
                type={visibility ? "text" : "password"}
                placeholder="Confirm Password"
                className="py-3 pl-4 pr-3 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
                required
              />
              <span
                onClick={() => setVisibility(!visibility)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-lg cursor-pointer"
              >
                {visibility ? <BsEmojiSurprise /> : <BsEmojiExpressionless />}
              </span>
            </div>
            <div className="w-full relative sm:col-span-2">
              <input
                onChange={(e) => {
                  setVendorData({ ...vendorData, address: e.target.value });
                }}
                placeholder="Enter Address"
                className="py-3 pl-4 w-full rounded-xl bg-[#eeeeee53] placeholder:text-white text-white border-2 focus:outline-double outline-green-300 border-none outline-4"
                required
              />
            </div>
            <div className="sm:col-span-2 flex flex-col items-center gap-4">
              <button
                onClick={handleVendorRegister}
                className="px-8 py-3 bg-green-400 uppercase hover:bg-green-500 rounded-xl w-full sm:w-auto"
              >
                Register
              </button>
              <span className="flex gap-1.5">
                <p>Already a vendor?</p>
                <Link
                  to="/vendor/login"
                  className="text-blue-500 hover:underline"
                >
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </article>
    </section>
  );
}
