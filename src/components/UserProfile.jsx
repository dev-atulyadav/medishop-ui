import React from "react";

export default function UserProfile() {
  return (
    <section className="w-full p-3">
      <article className="h-full w-full shadow-inset-3xl rounded-xl p-4 flex flex-col items-center justify-start">
        <form className="flex justify-center items-center flex-col gap-4">
          <img
            src="https://d35y6w71vgvcg1.cloudfront.net/media/2020/03/rajpal.jpg"
            className="rounded-full h-28 w-28"
            alt=""
          />
          <h3 className="text-2xl font-bold">Hello World!</h3>
          <div className="flex gap-2 p-4 w-full border-b-2 border-gray-300 rounded-xl">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              disabled
              value={"world@gmail.com"}
              name=""
              id=""
            />
          </div>
          <div className="flex gap-2 p-4 w-full border-b-2 border-gray-300 rounded-xl">
            <label htmlFor="email">Contact:</label>
            <input type="tel" disabled value={"123456789"} name="" id="" />
          </div>
          <div className="flex gap-2 p-4 w-full border-b-2 border-gray-300 rounded-xl">
            <label htmlFor="email">DOB:</label>
            <input type="text" disabled value={"01-JAN-2000"} name="" id="" />
          </div>
          <div className="flex gap-2 p-4 w-full border-b-2 border-gray-300 rounded-xl">
            <label htmlFor="email">Address:</label>
            <input
              type="email"
              disabled
              value={"Abc-Delhi-123456"}
              name=""
              id=""
            />
          </div>
          <span className="flex gap-8">
            <button className="px-7 py-2 hover:bg-blue-500 border-[1px] border-blue-500 hover:text-white text-blue-500 font-semibold uppercase rounded-xl">Edit</button>
            <button className="px-4 py-2 hover:bg-red-500 border-[1px] border-red-500 hover:text-white text-red-500 font-semibold uppercase rounded-xl">Cancel</button>
          </span>
        </form>
        <span className="p-4 text-sm text-red-600 underline">
        <p>deactivate my account!!</p>
        </span>
      </article>
    </section>
  );
}
