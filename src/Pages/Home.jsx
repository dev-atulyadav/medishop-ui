import React, { useContext, useState } from "react";
import Header from "../components/Header";
import Auth from "./Auth";
import Section from "../components/Section";
import Footer from "../components/Footer";
import TopSelling from "../components/TopSelling";

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
