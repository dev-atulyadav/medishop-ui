import React from "react";
import ProductBox from "./ProductBox";

export default function UserHome() {
  return (
    <section className=" w-full bg-red-00 p-2 flex justify-center items-center">
      <article className="sm:p-3 h-full w-full rounded-xl shadow-inset-xl bg-gray-100 overflow-scroll flex justify-center items-start">
        <main className="sm:flex flex-wrap justify-center items-center h-full w-full">
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </main>
      </article>
    </section>
  );
}
