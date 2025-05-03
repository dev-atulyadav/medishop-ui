import React, { useEffect, useState } from "react";
import { deleteVendor, getAllVendors, updateVendorStatus } from "../../../lib/action";
import { FaEdit, FaTrash, FaStore } from "react-icons/fa";
import { toast } from "react-toastify";

const DisplayVendors = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const [vendors, setVendors] = useState([]);
  const [editingVendor, setEditingVendor] = useState(null);

  useEffect(() => {
    const fetchVendors = async () => {
      const vendors = await getAllVendors(admin.email);
      setVendors(vendors.data);
    };
    fetchVendors();
  }, [editingVendor]);

  const handleEdit = (vendor) => {
    setEditingVendor(vendor);
  };

  const handleUpdate = async (e, vendorId) => {
    e.preventDefault();
    // Add update logic here
    setEditingVendor(null);
  };
  console.log(vendors);

  return (
    <section className="w-full min-h-screen p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <FaStore className="text-2xl text-blue-500" />
          <h1 className="text-2xl font-bold">Manage Vendors</h1>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
        <div className="min-w-full">
          {vendors.length > 0 ? (
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                    Email
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden sm:table-cell">
                    Phone
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden lg:table-cell">
                    Joined
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {vendors.map((vendor) => (
                  <tr key={vendor.id}>
                    {editingVendor?.id === vendor.id ? (
                      <td colSpan="6" className="px-4 py-2">
                        <form
                          onSubmit={(e) => handleUpdate(e, vendor.id)}
                          className="flex flex-col sm:flex-row gap-4 items-start sm:items-center"
                        >
                          <input
                            onChange={(e) => {
                              setEditingVendor({
                                ...editingVendor,
                                name: e.target.value,
                              });
                            }}
                            type="text"
                            defaultValue={vendor.name}
                            className="p-2 border rounded w-full sm:w-auto"
                          />
                          <input
                            onChange={(e) => {
                              setEditingVendor({
                                ...editingVendor,
                                email: e.target.value,
                              });
                            }}
                            type="email"
                            defaultValue={vendor.email}
                            className="p-2 border rounded w-full sm:w-auto"
                          />
                          <input
                            onChange={(e) => {
                              setEditingVendor({
                                ...editingVendor,
                                phone: e.target.value,
                              });
                            }}
                            type="text"
                            defaultValue={vendor.phone}
                            className="p-2 border rounded w-full sm:w-auto"
                          />
                          <select
                            onChange={(e) => {
                              setEditingVendor({
                                ...editingVendor,
                                vendorStatus: e.target.value,
                              });
                            }}
                            defaultValue={vendor.vendorStatus}
                            className="p-2 border rounded w-full sm:w-auto"
                          >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                          </select>
                          <div className="flex gap-2">
                            <button
                              onClick={async (e) => {
                                e.preventDefault();
                                console.log(editingVendor);
                                const response = await updateVendorStatus(
                                  editingVendor,
                                  admin.email
                                );
                                if (response.status === 202) {
                                  toast.success(
                                    "Vendor updated successfully!",
                                    {
                                      position: "top-right",
                                      autoClose: 5000,
                                      hideProgressBar: false,
                                      closeOnClick: true,
                                      pauseOnHover: true,
                                    }
                                  );
                                  setEditingVendor(null);
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
                              type="submit"
                              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              onClick={() => setEditingVendor(null)}
                              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
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
                            {vendor.name}
                          </div>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap hidden md:table-cell">
                          <div className="text-sm text-gray-500">
                            {vendor.email}
                          </div>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap hidden sm:table-cell">
                          <div className="text-sm text-gray-500">
                            {vendor.phone}
                          </div>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <span
                            className={`text-sm px-2 py-1 rounded-full capitalize ${
                              vendor.vendorStatus === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {vendor.vendorStatus}
                          </span>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap hidden lg:table-cell">
                          <div className="text-sm text-gray-500">
                            {new Date(vendor.createdAt).toLocaleDateString()}
                          </div>
                        </td>
                        <td className="px-4 py-2 whitespace-nowrap">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEdit(vendor)}
                              className="p-2 text-blue-500 hover:bg-blue-100 rounded"
                              title="Edit"
                            >
                              <FaEdit />
                            </button>
                            <button
                              onClick={async (e) => {
                                e.preventDefault();
                                const response = await deleteVendor(
                                  vendor.email
                                );
                                if (response.status === 200) {
                                  toast.success(
                                    "Vendor deleted successfully!",
                                    {
                                      position: "top-right",
                                      autoClose: 5000,
                                      hideProgressBar: false,
                                      closeOnClick: true,
                                      pauseOnHover: true,
                                    }
                                  );
                                  setEditingVendor(null);
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
            <div className="flex justify-center items-center h-full">
              <h1 className="text-2xl font-bold">No vendors found</h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DisplayVendors;
