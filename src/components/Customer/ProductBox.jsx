import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProductBox({ medicine, handleAddToCart }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [quantity, setQuantity] = useState(1);
  return (
    <main className="flex w-full flex-col justify-center items-center gap-2 p-2">
      <ToastContainer />
      <div className="flex justify-between items-center p-4 sm:p-2 rounded-xl shadow-inset-xl bg-white sm:flex-col sm:h-56 w-full">
        <img src={medicine.imageUrl} className="h-24" alt="can't load" />
        <div className="text-xs sm:text-sm sm:w-52 sm:text-center flex md:flex-col justify-center items-start md:items-center gap-3">
          <h3>{medicine.name}</h3>
          <p>₹{medicine.price}</p>
          <span className="flex justify-center items-center gap-2 text-white text-center">
            <Link
              to={`view-medicine/${medicine.id}`}
              className="px-2 py-2 w-24 border-[1px]  border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 rounded-lg "
            >
              View Details
            </Link>
            <Link
              to="/cart"
              onClick={(e) => {
                if (user) {
                  setQuantity(quantity + 1);
                  handleAddToCart(medicine, quantity);
                } else {
                  e.preventDefault();
                  toast.error("Please login to add to cart", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                }
              }}
              className="px-3 py-2 w-20 border-[1px] border-green-500 hover:bg-green-500 text-green-500 hover:text-white rounded-lg "
            >
              Buy now
            </Link>
          </span>
        </div>
      </div>
    </main>
  );
}
