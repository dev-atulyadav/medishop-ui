import React from "react";
import UserHome from "../components/UserHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterBar from "../components/FilterBar";
import PageIndexing from "../components/PageIndexing";
export default function User() {
  return (
    <>
      <Header />
      <FilterBar />
      <UserHome />
      <PageIndexing/>
      <Footer />
    </>
  );
}
