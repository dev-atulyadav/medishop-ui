import React, { useState } from "react";
import ProductBox from "./ProductBox";

export default function UserHome() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Nutrigro By Complan Protein | 2 to 6 Years | Flavour Badam Kheer",
      price: 100,
      image:
        "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/cropped/n5yq2ne4k31ae9najbli.png",
    },
    {
      id: 2,
      name: "Nutrigro By Complan Protein | 2 to 6 Years | Flavour Badam Kheer",
      price: 200,
      image:
        "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/cropped/n5yq2ne4k31ae9najbli.png",
    },
    {
      id: 3,
      name: "Nutrigro By Complan Protein | 2 to 6 Years | Flavour Badam Kheer",
      price: 300,
      image:
        "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/cropped/n5yq2ne4k31ae9najbli.png",
    },
  ]);
  return (
    <section className=" w-full bg-red-00 p-2 flex justify-center items-center">
      <article className="sm:p-3 h-full w-full rounded-xl shadow-inset-xl bg-gray-100 overflow-scroll flex justify-center items-start">
        <main className="sm:flex flex-wrap justify-center items-center h-full w-full">
          {products.map((product) => (
            <ProductBox key={product.id} product={product} />
          ))}
        </main>
      </article>
    </section>
  );
}
