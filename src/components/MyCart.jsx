import React from "react";

export default function MyCart() {
  return (
    <section className="h-screen w-full p-3 flex justify-center items-center">
      <article className="h-full w-full shadow-inset-xl rounded-xl p-3 text-2xl font-semibold uppercase bg-gray-100 flex flex-col gap-4 justify-start items-center overflow-scroll">
        <h2 className="bg-white w-full p-2 rounded-xl shadow-inset-xl text-center">
          My Cart
        </h2>
        <main className="text-sm bg-white p-4 rounded-xl shadow-inset-xl flex gap-4">
          <img
            src="https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/cropped/n5yq2ne4k31ae9najbli.png"
            className="h-24"
            alt=""
          />
          <div className="flex flex-col gap-1.5">
            <h3>
              Nutrigro By Complan Protein | 2 to 6 Years | Flavour Badam Kheer
            </h3>
            <span className="flex gap-1 text-[0.8rem]">
              <p>status:</p>
              <p className="text-green-500">Delivered</p>
            </span>
          </div>
        </main>
      </article>
    </section>
  );
}
