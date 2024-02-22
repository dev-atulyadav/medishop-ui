import React from "react";

export default function ProductBox() {
  return (
    <main className="flex flex-col justify-center items-center gap-2 p-2">
      <div className="flex justify-between items-center p-2 rounded-xl shadow-inset-xl w-full bg-white">
        <img
          src="https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/cropped/n5yq2ne4k31ae9najbli.png"
          className="h-28"
          alt="Complain"
        />
        <div className="text-sm font-semibold">
          <h3>
            Nutrigro By Complan Protein | 2 to 6 Years | Flavour Badam Kheer
          </h3>
          <span className="flex justify-center items-center gap-2 uppercase text-white">
            <button className="px-2 p-2 w-2/4 border-[1px]  border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 rounded-lg">
              Add to cart
            </button>
            <button className="px-2 p-2 w-2/4 border-[1px] border-green-500 hover:bg-green-500 text-green-500 hover:text-white rounded-lg">
              Buy now
            </button>
          </span>
        </div>
      </div>
    </main>
  );
}
