import React, { useState } from "react";

export default function ProductBox({ product }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [cart, setCart] = useState([]);
  const handleAddToCart = () => {
    if (user) {
      setCart([...cart, product]);
    } else {
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
  };
  console.log(cart);
  return (
    <main className="flex flex-col justify-center items-center gap-2 p-2">
      <div className="flex justify-between items-center p-4 sm:p-2 rounded-xl shadow-inset-xl bg-white sm:flex-col sm:h-56">
        <img src={product.image} className="h-24" alt="Complain" />
        <div className="text-xs sm:text-sm sm:w-52 sm:text-center flex flex-col gap-3">
          <h3>{product.name}</h3>
          <span className="flex justify-center items-center gap-2 text-white">
            <button
              onClick={handleAddToCart}
              className="px-2 py-2 w-full sm:w-24 border-[1px]  border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 rounded-lg "
            >
              {user ? "Add to cart" : "Login to add to cart"}
            </button>
            <button
              onClick={handleAddToCart}
              className="px-3 py-2 w-full sm:w-24 border-[1px] border-green-500 hover:bg-green-500 text-green-500 hover:text-white rounded-lg "
            >
              {user ? "Buy now" : "Login to buy"}
            </button>
          </span>
        </div>
      </div>
    </main>
  );
}
