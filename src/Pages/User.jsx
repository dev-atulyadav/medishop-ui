import React, { useContext, useEffect, useState } from "react";
import UserHome from "../components/Customer/UserHome";
import FilterBar from "../components/Customer/FilterBar";
import PageIndexing from "../components/Customer/PageIndexing";
import FilterBox from "../components/Customer/FilterBox";
import { FilterContext } from "../context/filter/FilterState";
import { getAllMedicines } from "../../lib/action";

export default function User() {
  const [medicines, setMedicines] = useState([]);
  const { showFilter } = useContext(FilterContext);
  useEffect(() => {
    const fetchMedicines = async () => {
      const response = await getAllMedicines();
      if (response.status === 302) {
        const medicines = response.data.filter(
          (medicine) => medicine.status === "Approved"
        );
        setMedicines(medicines);
      } else {
        setMedicines([]);
      }
    };
    fetchMedicines();
  }, []);
  return (
    <div className="mt-20 w-full">
      <FilterBar />
      {!showFilter && <UserHome medicines={medicines} />}
      {showFilter && <FilterBox />}
      {/* <PageIndexing /> */}
    </div>
  );
}
