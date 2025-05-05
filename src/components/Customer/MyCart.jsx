import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/user/UserState";
import { Link } from "react-router-dom";

export default function MyCart() {
  const { cart, handleRemoveFromCart, handleAddToCart } =
    useContext(UserContext);
  const [quantity, setQuantity] = useState(1);
  console.log(cart);

  return (
    <section className="h-screen w-full p-3 flex justify-center items-center mt-20">
      <article className="h-full w-full shadow-inset-xl rounded-xl p-3 text-2xl font-semibold uppercase bg-gray-100 flex flex-col gap-4 justify-start items-center overflow-scroll">
        <h2 className="bg-white w-full sm:p-3 p-2 rounded-xl shadow-inset-xl text-center">
          My Cart
        </h2>
        <div className="flex sm:grid sm:grid-cols-4 w-full flex-wrap h-full justify-start flex-col items-start gap-3 sm:flex-row">
          {cart.length > 0 ? (
            cart.map((medicine, index) => (
              <main
                key={index}
                className="text-sm w-full sm:flex-col sm:justify-center sm:items-center sm:w-56 bg-white p-4 rounded-xl shadow-inset-xl flex gap-4"
              >
                <img src={medicine.imageUrl} className="h-24 sm:h-32" alt="" />
                <div className="flex sm:justify-center sm:text-center sm:items-center flex-col gap-1.5">
                  <h3>{medicine.name}</h3>
                  <span className="flex gap-1 text-[0.8rem]">
                    <p>Price:</p>
                    <p className="text-green-500">₹{medicine.price}</p>
                  </span>
                  <span className="flex gap-2 items-center text-[0.8rem]">
                    <p>Quantity:</p>
                    <div className="flex items-center gap-2">
                      <button
                        className="px-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                        onClick={() => {
                          setQuantity(quantity - 1);
                          if (quantity === 1) {
                            handleRemoveFromCart(medicine, quantity);
                          }
                        }}
                      >
                        -
                      </button>
                      <p className="text-green-500">{medicine.quantity}</p>
                      <button
                        className="px-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                        onClick={() => {
                          setQuantity(quantity + 1);
                          handleAddToCart(medicine, quantity);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </span>
                  <span className="flex gap-1 text-[0.8rem]">
                    <p>Total Price:</p>
                    <p className="text-green-500">
                      ₹{medicine.price * medicine.quantity}
                    </p>
                  </span>
                  <div className="flex gap-2 mt-2">
                    <button
                      className="px-3 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      onClick={() => console.log("Confirm purchase")}
                    >
                      Confirm
                    </button>
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
                      onClick={() => {
                        handleRemoveFromCart(medicine);
                        setQuantity(1);
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </main>
            ))
          ) : (
            <div className="flex justify-center items-center h-[50vh] w-screen flex-col normal-case">
              <h1 className="text-2xl font-bold">Cart is empty!</h1>
              <Link
                to="/home"
                className="text-blue-500 hover:text-blue-600 transition-colors text-sm"
              >
                Add some medicines to your cart
              </Link>
            </div>
          )}
        </div>
      </article>
    </section>
  );
}
