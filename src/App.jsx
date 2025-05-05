import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {}, [user]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
