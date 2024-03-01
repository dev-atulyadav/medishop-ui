import React, { useContext, useState } from "react";
import Header from "../components/Header";
import Auth from "./Auth";
import Section from "../components/Section";
import Footer from "../components/Footer";

export default function Home() {
  const [data] = useState([
    {
      image:
        "https://images.news18.com/ibnlive/uploads/2023/02/epharmacy-online-drugs-167608885416x9.png",
      para: "Buy 100% genuine & cheap durgs & medicines at MediShop.",
      btn: ["Order Now", () => {}, "self-start"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhhcm1hY3l8ZW58MHx8MHx8fDA%3D",
      para: "One & only India largest pharmacy store...",
      btn: ["Learn More", () => {}, "self-end"],
    },
    {
      image:
        "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      para: "Buy best medicines tested in best laboratories from best sellers.",
      btn: ["Explore now", () => {}, "self-start"],
    },
  ]);

  return (
    <>
      <Header />
      <Section data={data} />
      <Auth />
      <Footer />
    </>
  );
}
