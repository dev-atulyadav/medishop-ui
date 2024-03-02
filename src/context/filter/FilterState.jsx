import React, { createContext, useState } from "react";

export const FilterContext = createContext();
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
