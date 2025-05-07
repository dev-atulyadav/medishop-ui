import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addMedicine } from "../../../lib/action";

const AddMedicine = () => {
  const vendor = JSON.parse(localStorage.getItem("vendor"));
  const [medicineData, setMedicineData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    expiryDate: "",
    companyName: "",
    imageUrl: "",
  });

  if (!vendor || vendor.vendorStatus === "inactive") {
    return <Navigate to="/vendor/login" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(medicineData);
    const response = await addMedicine(medicineData);
    console.log(response);
    if (response.status === 200) {
      toast.success("Medicine added successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      setMedicineData({
        name: "",
        description: "",
        price: "",
        quantity: "",
        expiryDate: "",
        companyName: "",
        imageUrl: "",
      });
    } else {
      toast.error("Failed to add medicine!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="w-full min-h-screen bg-gray-50 p-6 mt-20">
        <article className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Add New Medicine
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Medicine Name
                </label>
                <input
                  value={medicineData.name}
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter medicine name"
                  onChange={(e) =>
                    setMedicineData({ ...medicineData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Price (₹)
                </label>
                <input
                  value={medicineData.price}
                  type="number"
                  required
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter price"
                  onChange={(e) =>
                    setMedicineData({ ...medicineData, price: e.target.value })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Stock Quantity
                </label>
                <input
                  value={medicineData.quantity}
                  type="number"
                  required
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter stock quantity"
                  onChange={(e) =>
                    setMedicineData({
                      ...medicineData,
                      quantity: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Expiry Date
                </label>
                <input
                  value={medicineData.expiryDate}
                  type="date"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  onChange={(e) =>
                    setMedicineData({
                      ...medicineData,
                      expiryDate: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Manufacturer
                </label>
                <input
                  value={medicineData.companyName}
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter manufacturer name"
                  onChange={(e) =>
                    setMedicineData({
                      ...medicineData,
                      companyName: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  value={medicineData.imageUrl}
                  type="url"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter image URL"
                  onChange={(e) =>
                    setMedicineData({
                      ...medicineData,
                      imageUrl: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <textarea
                value={medicineData.description}
                required
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter medicine description"
                onChange={(e) =>
                  setMedicineData({
                    ...medicineData,
                    description: e.target.value,
                  })
                }
              ></textarea>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Add Medicine
              </button>
            </div>
          </form>
        </article>
      </section>
    </>
  );
};

export default AddMedicine;
