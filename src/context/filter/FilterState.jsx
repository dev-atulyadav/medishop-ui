import React, { createContext, useState } from "react";

export const FilterContext = createContext();
export default function FilterState(props) {
  const [sortByAlphabet, setSortByAlphabet] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const handleFilterBox = () => {
    setShowFilter(!showFilter);
  };
  const [filter, setFilter] = useState("");
  const handleFilter = (filter) => {
    setFilter(filter);
  };
  const handleSortByAlphabet = (sortByAlphabet) => {
    setSortByAlphabet(sortByAlphabet);
  };
  return (
    <FilterContext.Provider
      value={{
        showFilter,
        handleFilterBox,
        filter,
        handleFilter,
        sortByAlphabet,
        handleSortByAlphabet,
      }}
    >
      {props.children}
    </FilterContext.Provider>
  );
}
