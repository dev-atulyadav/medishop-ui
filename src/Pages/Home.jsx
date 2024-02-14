import React, { useState } from "react";
import Header from "../components/Header";
import Auth from "./Auth";
import Section from "../components/Section";

export default function Home() {
  const [data, setData] = useState([
    {
      image:
        "https://images.news18.com/ibnlive/uploads/2023/02/epharmacy-online-drugs-167608885416x9.png",
      para: "Buy 100% genuine & cheap durgs & medicines at Medi-Shop",
      btn: ["Order Now", () => {}, "self-start"],
    },
    {
      image:
        "https://images.unsplash.com/photo-1576602976047-174e57a47881?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGhhcm1hY3l8ZW58MHx8MHx8fDA%3D",
      para: "One & only India largest pharmacy store...",
      btn: ["Learn More", () => {}, "self-end"],
    },
  ]);
  const [auth, setAuth] = useState(false);
  const handleForms = (e) => {
    let text = e.target.textContent;
    setAuth(!auth);
    console.log(auth);
  };
  return (
    <>
      <Header />
      <Section data={data} />
      <Auth auth={auth} handleForms={handleForms} />
    </>
  );
}
