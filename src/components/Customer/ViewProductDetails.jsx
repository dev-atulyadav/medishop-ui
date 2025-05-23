import React, { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { TbShoppingCart } from "react-icons/tb";
import { UserContext } from "../../context/user/UserState";
import { Link, useParams } from "react-router-dom";
import { DotLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ViewProductDetails = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { medicines, handleAddToCart } = useContext(UserContext);
  const [quantity, setQuantity] = useState(1);
  const medicine = medicines.filter((item) => item.id == id)[0];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [medicine]);

  return (
    <>
      <ToastContainer />
      <section className="py-12 bg-gray-50 mt-20">
        {medicine && !loading ? (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
              {/* Product Image */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={medicine.imageUrl}
                  alt={medicine.name}
                  className="w-full object-fit object-center"
                />
              </div>

              {/* Product Details */}
              <div className="mt-10 lg:mt-0 lg:pl-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {medicine.name}
                </h1>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
                  {medicine.category}
                </span>

                <div className="mt-4">
                  <p className="text-2xl font-bold text-blue-600">
                    ₹{medicine.price}
                  </p>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {medicine.description}
                  </p>

                  {/* Quantity Selector */}
                  <div className="mt-8 flex items-center">
                    <span className="text-gray-600 mr-2">Quantity:</span>
                    <select
                      value={quantity}
                      onChange={(e) => setQuantity(parseInt(e.target.value))}
                      className="px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map(
                        (num) => (
                          <option key={num} value={num}>
                            {num}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                </div>
                {/* Action Buttons */}
                <div className="mt-8 flex space-x-4">
                  <Link
                    to="/cart"
                    onClick={(e) => {
                      if (user) {
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
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <TbShoppingCart className="h-5 w-5 mr-2" />
                    Add to Cart
                  </Link>
                  <button className="flex-1 border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center">
                    <FaRegHeart className="h-5 w-5 mr-2" />
                    Add to Wishlist
                  </button>
                </div>

                {/* Product Information */}
                <div className="mt-10 border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    Product Details
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Brand:</span>{" "}
                        {medicine.brand}
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        <span className="font-medium">Category:</span>{" "}
                        {medicine.category}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">
                        <span className="font-medium">Expiry Date:</span>{" "}
                        {medicine.expiryDate}
                      </p>
                      <p className="text-sm text-gray-600 mt-2 flex items-center">
                        <HiOutlineExclamationCircle className="h-5 w-5 text-yellow-500 mr-1" />
                        <span className="font-medium">
                          Prescription Required
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-screen flex justify-center items-center h-[50vh]">
            <DotLoader color="gray" size={50} />
          </div>
        )}
      </section>
    </>
  );
};

export default ViewProductDetails;
