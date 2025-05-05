import React, { useContext, useEffect, useState } from "react";
import ProductBox from "./ProductBox";
import { getAllMedicines } from "../../../lib/action";
import { DotLoader } from "react-spinners";
import { UserContext } from "../../context/user/UserState";

export default function UserHome() {
  const { cart, handleAddToCart, handleRemoveFromCart, medicines } =
    useContext(UserContext);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [medicines]);
  return (
    <section className=" w-full bg-red-00 p-2 flex justify-center items-center">
      <article className="sm:p-3 h-full w-full rounded-xl shadow-inset-xl bg-gray-100 overflow-scroll flex justify-center items-start">
        <main className="sm:flex flex-wrap justify-center items-center h-full w-full">
          {loading ? (
            <h1 className="text-2xl font-bold flex justify-center items-center h-[50vh] w-full">
              <DotLoader color="gray" size={50} />
            </h1>
          ) : medicines?.length > 0 ? (
            medicines.map((medicine) => (
              <ProductBox
                key={medicine.id}
                medicine={medicine}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ))
          ) : (
            <h1 className="text-2xl font-bold flex justify-center items-center h-[50vh] w-full">
              No medicines found
            </h1>
          )}
        </main>
      </article>
    </section>
  );
}
