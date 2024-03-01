import React from "react";
import ShortDetails from "./ShortDetails";

export default function SiteDetails() {
  let details = [
    {
      heading: "Why to choose MediShop?",
      para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        tenetur vitae repellat necessitatibus illum corporis accusamus
        architecto ex minima ipsam exercitationem suscipit et, dolore sed
        alias iure reprehenderit nihil, consectetur delectus fuga veniam
        esse tempore? Obcaecati tempora consequuntur ea incidunt!`,
    },
    {
      heading: "About Us!",
      para: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
        tenetur vitae repellat necessitatibus illum corporis accusamus
        architecto ex minima ipsam exercitationem suscipit et, dolore sed
        alias iure reprehenderit nihil, consectetur delectus fuga veniam
        esse tempore? Obcaecati tempora consequuntur ea incidunt!`,
    },
  ];
  return (
    <section className="p-2 mt-20">
      <article className="bg-gray-100 rounded-xl h-full shadow-inset-xl p-4 flex flex-col justify-start items-center gap-2">
        <img
          src="https://images.pexels.com/photos/105028/pexels-photo-105028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="rounded-xl"
          alt=""
        />
        <ShortDetails details={details} />
      </article>
    </section>
  );
}
