import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { getAllMedicines, updateMedicineStatus } from "../../../lib/action";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";

const DisplayMedicine = () => {
  const [medicines, setMedicines] = useState([]);
  const [editingMedicine, setEditingMedicine] = useState(null);
  const admin = JSON.parse(localStorage.getItem("admin"));
  if (!admin) {
    return <Navigate to="/admin/login" />;
  }
  useEffect(() => {
    const fetchMedicines = async () => {
      const response = await getAllMedicines();
      if (response.status === 302) {
        setMedicines(response.data);
      } else {
        toast.error("Internal Server Error!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
      }
    };
    fetchMedicines();
  }, [editingMedicine]);

  const handleEdit = (medicine) => {
    setEditingMedicine(medicine);
  };

  return (
    <>
      <ToastContainer />
      <section className="w-full min-h-screen p-6 mt-20">
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="align-middle inline-block min-w-full">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                {medicines.length > 0 ? (
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Name
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Description
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Stock
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {medicines.map((medicine) => (
                        <tr key={medicine.id}>
                          {editingMedicine?.id === medicine.id ? (
                            <td colSpan="6" className="px-4 py-2">
                              <form className="flex gap-4 items-center">
                                <input
                                  type="text"
                                  defaultValue={medicine.name}
                                  onChange={(e) => {
                                    setEditingMedicine({
                                      ...editingMedicine,
                                      name: e.target.value,
                                    });
                                  }}
                                  className="border rounded px-2 py-1 w-1/12"
                                />
                                <input
                                  type="text"
                                  defaultValue={medicine.description}
                                  className="border rounded px-2 py-1 w-1/3"
                                />
                                <input
                                  type="number"
                                  onChange={(e) => {
                                    setEditingMedicine({
                                      ...editingMedicine,
                                      price: e.target.value,
                                    });
                                  }}
                                  defaultValue={medicine.price}
                                  className="border rounded px-2 py-1 w-1/12"
                                />
                                <input
                                  type="number"
                                  onChange={(e) => {
                                    setEditingMedicine({
                                      ...editingMedicine,
                                      quantity: e.target.value,
                                    });
                                  }}
                                  defaultValue={medicine.quantity}
                                  className="border rounded px-2 py-1 w-1/12"
                                />
                                <select
                                  defaultValue={medicine.status}
                                  onChange={(e) => {
                                    setEditingMedicine({
                                      ...editingMedicine,
                                      status: e.target.value,
                                    });
                                  }}
                                  className="border rounded px-2 py-1 w-1/6"
                                >
                                  <option value="Approved">Approved</option>
                                  <option value="Not Approved">
                                    Not Approved
                                  </option>
                                </select>
                                <div className="flex gap-2">
                                  <button
                                    type="submit"
                                    onClick={async (e) => {
                                      e.preventDefault();
                                      const response =
                                        await updateMedicineStatus(
                                          medicine.vendor.id,
                                          medicine.id,
                                          editingMedicine.status,
                                          admin.email
                                        );
                                      console.log(response);
                                      if (response.status === 202) {
                                        toast.success(
                                          "Medicine status updated successfully!",
                                          {
                                            position: "top-right",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                          }
                                        );
                                        setEditingMedicine(null);
                                      } else {
                                        toast.error("Internal Server Error!", {
                                          position: "top-right",
                                          autoClose: 5000,
                                          hideProgressBar: false,
                                          closeOnClick: true,
                                          pauseOnHover: true,
                                        });
                                      }
                                    }}
                                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                                  >
                                    Save
                                  </button>
                                  <button
                                    onClick={() => setEditingMedicine(null)}
                                    className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </form>
                            </td>
                          ) : (
                            <>
                              <td className="px-4 py-2 whitespace-nowrap">
                                <div className="text-sm font-medium text-gray-900">
                                  {medicine.name}
                                </div>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                <div className="text-sm text-gray-500">
                                  {medicine.description}
                                </div>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                <div className="text-sm text-gray-500">
                                  ₹{medicine.price}
                                </div>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                <div className="text-sm text-gray-500">
                                  {medicine.quantity}
                                </div>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                <span
                                  className={`text-sm px-2 py-1 rounded-full capitalize ${
                                    medicine.status === "Approved"
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {medicine.status}
                                </span>
                              </td>
                              <td className="px-4 py-2 whitespace-nowrap">
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => handleEdit(medicine)}
                                    className="p-2 text-blue-500 hover:bg-blue-100 rounded"
                                    title="Edit"
                                  >
                                    <FaEdit />
                                  </button>
                                  <button
                                    onClick={() => {
                                      // Handle delete
                                      toast.success(
                                        "Medicine deleted successfully!"
                                      );
                                    }}
                                    className="p-2 text-red-500 hover:bg-red-100 rounded"
                                    title="Delete"
                                  >
                                    <FaTrash />
                                  </button>
                                </div>
                              </td>
                            </>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <div className="flex justify-center items-center h-64">
                    <h1 className="text-2xl font-bold text-gray-500">
                      No medicines found
                    </h1>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DisplayMedicine;
