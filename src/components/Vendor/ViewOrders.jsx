import React, { useEffect, useState } from "react";
import { getAllOrdersOfVendor, updateOrderStatus } from "../../../lib/action";
import { DotLoader } from "react-spinners";
import { toast } from "react-toastify";

const ViewOrders = () => {
  const vendor = JSON.parse(localStorage.getItem("vendor"));
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);
  const getOrderByVendorId = async (vendorId) => {
    const response = await getAllOrdersOfVendor(vendorId);
    setOrders(response.data);
    console.log(response.data);
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      if (vendor) {
        getOrderByVendorId(vendor.id);
      } else {
        window.location.href = "/vendor/login";
      }
    }, 1000);
  }, []);

  const updateStatus = async (orderId, newStatus) => {
    const response = await updateOrderStatus(orderId, newStatus);
    if (response.status === 200) {
      setOrders(
        orders.map((order) =>
          order.id === orderId ? { ...order, status: newStatus } : order
        )
      );
      toast.success("Order status updated successfully!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } else {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };

  return (
    <section className="p-6 mt-20 h-screen">
      <h2 className="text-2xl font-bold mb-6">Total Orders</h2>

      {orders?.length > 0 && !loading ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Quantity
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {orders.map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-800">
                    #{order.orderId}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {order?.customer?.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {order?.medicine?.name}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {order.quantity}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    ₹{order.totalAmount}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-800">
                    {order.orderDate}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-medium ${
                        order.status === "pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : order.status === "processing"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-green-100 text-green-800"
                      }`}
                    >
                      {order.status.charAt(0).toUpperCase() +
                        order.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm space-x-2">
                    {order.status !== "delivered" && (
                      <>
                        {order.status === "pending" && (
                          <button
                            onClick={() => updateStatus(order.id, "processing")}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                          >
                            Process
                          </button>
                        )}
                        {order.status === "processing" && (
                          <button
                            onClick={() => updateStatus(order.id, "delivered")}
                            className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded"
                          >
                            Mark Delivered
                          </button>
                        )}
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="h-[50vh] w-full flex justify-center items-center">
          <DotLoader color="gray" size={50} />
        </div>
      )}
    </section>
  );
};

export default ViewOrders;
