import React from "react";
import Bg_1 from "../assets/images/bg-1.jpg";

export default function Section() {
  return (
    <section className="h-screen w-full p-4">
      <article className="h-full rounded-xl w-full">
        <main>
          <img src={Bg_1} className="rounded-xl" alt="" />
          <h1>Buy 100% genuine & cheap durgs & medicines at Medi-Shop</h1>
          <button>Order Now</button>
        </main>
      </article>
    </section>
  );
}
