import React from "react";

export default function MyCart() {
  return (
    <section className="h-screen w-full p-3 flex justify-center items-center mt-20">
      <article className="h-full w-full shadow-inset-xl rounded-xl p-3 text-2xl font-semibold uppercase bg-gray-100 flex flex-col gap-4 justify-start items-center overflow-scroll">
        <h2 className="bg-white w-full sm:p-3 p-2 rounded-xl shadow-inset-xl text-center">
          My Cart
        </h2>
        <div className="flex sm:grid sm:grid-cols-4 w-full flex-wrap h-full justify-start flex-col items-start gap-3 sm:flex-row">
          <main className="text-sm w-full sm:flex-col sm:justify-center sm:items-center sm:w-56 bg-white p-4 rounded-xl shadow-inset-xl flex gap-4">
            <img
              src="https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/cropped/n5yq2ne4k31ae9najbli.png"
              className="h-24 sm:h-32"
              alt=""
            />
            <div className="flex sm:justify-center sm:text-center sm:items-center flex-col gap-1.5">
              <h3>
                Nutrigro By Complan Protein Flavour Badam Kheer
              </h3>
              <span className="flex gap-1 text-[0.8rem]">
                <p>status:</p>
                <p className="text-green-500">Delivered</p>
              </span>
            </div>
          </main>
        </div>
      </article>
    </section>
  );
}
