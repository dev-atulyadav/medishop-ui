import React from "react";
import { Outlet } from "react-router-dom";
import Section from "../Customer/Section";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
export default function Admin() {
  return (
    <>
      <Outlet />
    </>
  );
}
