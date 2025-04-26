import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsEmojiExpressionless, BsEmojiSurprise } from "react-icons/bs";
import vendorImage from "../../assets/images/vendor-bg.jpg";
import { vendorLogin } from "../../../lib/action";
export default function VendorLogin() {
  const vendor = JSON.parse(localStorage.getItem("vendor"));
  const [vendorData, setVendorData] = useState({});
  const [visibility, setVisibility] = useState(false);

  if (vendor && vendor.vendorStatus === "active") {
    return <Navigate to="/vendor" />;
  }

  const handleVendorLogin = async (e) => {
    e.preventDefault();
    const response = await vendorLogin(vendorData);
    if (response.status === 200) {
      localStorage.setItem("vendor", JSON.stringify(response.data));
      toast.success(response.data.message);
    }
  };
  return (
    <section className="w-full h-screen flex justify-center items-center mt-12 p-8 rounded-xl overflow-hidden">
      <article className="w-full h-full flex justify-center items-center relative">
        <img
          src={vendorImage}
          alt=""
          className="w-full h-[90%] object-cover absolute rounded-xl"
        />
        <div className="rounded-xl w-72 h- sm:w-80 text-white self-center flex flex-col justify-center items-center backdrop-blur-sm bg-[#62626249] p-4 gap-4 relative border-2">
          <Link
            to="/"
            className="text-2xl right-4 top-4 absolute hover:text-red-500 rounded-full"
          >
            <AiOutlineCloseCircle />
          </Link>
          <h3 className="text-2xl font-bold self-start">Vendor Login</h3>
          <form className="flex h- w-full flex-col justify-center items-center gap-4">
            <div className="w-full relative flex justify-center items-center">
              <input
                onChange={(e) => {
                  let value = e.target.value;
                  if (value !== "") {
                    setVendorData({ ...vendorData, email: value });
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
                  setVendorData({ ...vendorData, password: e.target.value });
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
              onClick={handleVendorLogin}
              className="px-8 py-3 bg-green-400 uppercase hover:bg-green-500 rounded-xl"
            >
              Login
            </button>
          </form>
          <span className="flex gap-1.5">
            <p>Not a vendor?</p>
            <Link
              to="/vendor/register"
              className="text-blue-500 hover:underline"
            >
              Register
            </Link>
          </span>
        </div>
      </article>
    </section>
  );
}
