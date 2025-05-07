import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { TbEdit } from "react-icons/tb";
import { deleteUser } from "../../../lib/action";

export default function UserProfile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [edit, setEdit] = useState(false);
  const handleEdits = () => {
    setEdit(!edit);
  };
  if (!user) {
    return <Navigate to="/auth/login" />;
  }
  return (
    <section className="w-full p-3 mt-20">
      <article className="h-full w-full shadow-inset-3xl rounded-xl p-4 flex flex-col items-center justify-start">
        <form className="flex justify-center items-center flex-col gap-4">
          <img
            src="https://static.vecteezy.com/system/resources/previews/036/594/092/non_2x/man-empty-avatar-photo-placeholder-for-social-networks-resumes-forums-and-dating-sites-male-and-female-no-photo-images-for-unfilled-user-profile-free-vector.jpg"
            className="rounded-full h-28 w-28"
            alt=""
          />
          <h3 className="text-2xl font-bold">{user?.name}</h3>
          <div className="flex gap-2 p-4 w-full border-b-2 border-gray-300 rounded-xl relative">
            <label htmlFor="email">Email:</label>
            <input
              onChange={() => {}}
              type="email"
              value={edit ? null : user?.email}
              name=""
              id="email"
            />
            <label htmlFor={edit && "email"}>
              <TbEdit
                onClick={handleEdits}
                className="text-2xl text-gray-500 absolute right-2"
              />
            </label>
          </div>
          <div className="flex gap-2 p-4 w-full border-b-2 border-gray-300 rounded-xl relative">
            <label htmlFor="contact">Contact:</label>
            <input
              type="tel"
              disabled
              value={user?.phone}
              name=""
              id="contact"
            />
            <TbEdit className="text-2xl text-gray-500 absolute right-2" />
          </div>
          <div className="flex gap-2 p-4 w-full border-b-2 border-gray-300 rounded-xl relative">
            <label htmlFor="dob">DOB:</label>
            <input type="text" disabled value={user?.dob} name="" id="dob" />
            <TbEdit className="text-2xl text-gray-500 absolute right-2" />
          </div>
          <div className="flex gap-2 p-4 w-full border-b-2 border-gray-300 rounded-xl relative">
            <label htmlFor="email">Address:</label>
            <input
              type="address"
              disabled
              value={user?.address}
              name=""
              id="address"
            />
            <TbEdit className="text-2xl text-gray-500 absolute right-2" />
          </div>
          <span className="flex gap-8">
            <button className="px-7 py-2 hover:bg-blue-500 border-[1px] border-blue-500 hover:text-white text-blue-500 font-semibold uppercase rounded-xl">
              Save
            </button>
            <button
              onClick={() => {
                localStorage.removeItem("user");
              }}
              className="px-4 py-2 hover:bg-red-500 border-[1px] border-red-500 hover:text-white text-red-500 font-semibold uppercase rounded-xl"
            >
              Logout
            </button>
          </span>
        </form>
        <span className="p-4 text-sm text-red-600">
          <button
            className="underline"
            onClick={(e) => {
              e.preventDefault();
              deleteUser(user.email);
            }}
          >
            deactivate my account!!
          </button>
        </span>
      </article>
    </section>
  );
}
