import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Section from "./Section";
import Auth from "../Pages/Auth";
import { ToastContainer } from "react-toastify";

export default function Forms() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Section />
      <Auth />
    </>
  );
}
