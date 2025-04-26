import React, { useContext } from "react";
import UserHome from "../components/Customer/UserHome";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FilterBar from "../components/Customer/FilterBar";
import PageIndexing from "../components/Customer/PageIndexing";
import FilterBox from "../components/Customer/FilterBox";
import { FilterContext } from "../context/filter/FilterState";

export default function User() {
  const { showFilter } = useContext(FilterContext);
  return (
    <>
      <div className="mt-20">
        <FilterBar />
        {!showFilter && <UserHome />}
        {showFilter && <FilterBox />}
        <PageIndexing />
      </div>
    </>
  );
}
