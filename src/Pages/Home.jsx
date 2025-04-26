import React, { useContext, useState } from "react";
import Header from "../components/Header/Header";
import Section from "../components/Customer/Section";
import Footer from "../components/Footer/Footer";
import TopSelling from "../components/Customer/TopSelling";

export default function Home() {
  return (
    <>
      <Header />
      <Section />
      <TopSelling />
      <Footer />
    </>
  );
}
