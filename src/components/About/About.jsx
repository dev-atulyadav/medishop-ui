import React from "react";
import ShortDetails from "../Customer/ShortDetails";

export default function About() {
  let details = [
    {
      heading: "Why to choose MediShop?",
      para: "We aim to provide best medicine to our consumer. You will find all medicines here from all verfied sellers. We review our sellers on daily basis to ensure that every product which is getting added on our platform. This helps us to verfiy that every product is safe to consume and under in expiry dates for our consumer.",
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
      <article className="bg-gray-100 rounded-xl h-full shadow-inset-xl p-4 flex flex-col justify-start items-center gap-2 sm:flex-row">
        <img
          src="https://images.pexels.com/photos/105028/pexels-photo-105028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          className="rounded-xl sm:h-96"
          alt=""
        />
        <ShortDetails details={details} />
      </article>
    </section>
  );
}
