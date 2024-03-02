import React, { useContext } from "react";
import UserHome from "../components/UserHome";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterBar from "../components/FilterBar";
import PageIndexing from "../components/PageIndexing";
import FilterBox from "../components/FilterBox";
import { FilterContext } from "../context/filter/FilterState";

export default function User() {
  const { showFilter } = useContext(FilterContext);
  return (
    <>
      <Header />
      <div className="mt-20">
        <FilterBar />
        {!showFilter && <UserHome />}
        {showFilter && <FilterBox />}
        <PageIndexing />
      </div>
      <Footer />
    </>
  );
}
