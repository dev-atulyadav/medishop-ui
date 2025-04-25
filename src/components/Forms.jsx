import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Section from "./Section";
import Auth from "../Pages/Auth";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import { Navigate } from "react-router-dom";

export default function Forms() {
  const user = localStorage.getItem("user");
  const { action } = useParams();

  return (
    <>
      <Header />
      <ToastContainer />
      <Section />
      {!user ? <Auth action={action} /> : <Navigate to="/" />}
    </>
  );
}
