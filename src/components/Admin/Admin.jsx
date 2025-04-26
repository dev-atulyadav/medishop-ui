import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Section from "./Section";
import Footer from "../Footer/Footer";
import AdminLogin from "./AdminLogin";

export default function Admin() {
  return (
    <>
      <Header />
      <Section />
      <Outlet />
      <Footer />
    </>
  );
}
