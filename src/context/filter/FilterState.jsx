import React, { useState } from "react";
import FilterContext from "./FilterContext";

export default function FilterState(props) {
  const [showFilter, setShowFilter] = useState(false);
  const handleFilterBox = () => {
    setShowFilter(!showFilter);
  };
  return (
    <FilterContext.Provider value={{ showFilter, handleFilterBox }}>
      {props.children}
    </FilterContext.Provider>
  );
}
