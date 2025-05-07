import React, { useEffect, useState } from "react";
import { getAllOrdersForAdmin, updateOrderStatus } from "../../../lib/action";
import { DotLoader } from "react-spinners";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DisplayOrders = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    try {
      const response = await getAllOrdersForAdmin();
      setOrders(response.data);
    } catch (error) {
      toast.error("Failed to fetch orders");
    }
  };

  useEffect(() => {
    if (!admin) {
      window.location.href = "/admin/login";
      return;
    }

    setTimeout(() => {
      setLoading(false);
      fetchAllOrders();
    }, 1000);
  }, []);

  const updateStatus = async (orderId, newStatus) => {
    try {
      const response = await updateOrderStatus(orderId, newStatus);
      if (response.status === 200) {
        setOrders(
          orders.map((order) =>
            order.id === orderId ? { ...order, status: newStatus } : order
          )
        );
        toast.success("Order status updated successfully!");
      }
    } catch (error) {
      toast.error("Failed to update order status");
    }
  };

  return (
    <div className="min-h-screen w-full mt-20 bg-gray-100 py-8">
      <ToastContainer />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">
              Order Management
            </h2>
          </div>

          {loading ? (
            <div className="h-64 flex items-center justify-center">
              <DotLoader color="#4F46E5" size={50} />
            </div>
          ) : orders.length === 0 ? (
            <div className="p-6 text-center text-gray-500">No orders found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order Details
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          #{order.orderId}
                        </div>
                        <div className="text-sm text-gray-500">
                          {order.orderDate}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.customer?.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {order.customer?.email}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {order.medicine?.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          Quantity: {order.quantity} | Total: ₹
                          {order.totalAmount}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                          ${
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
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        {order.status !== "delivered" && (
                          <div className="space-x-2">
                            {order.status === "pending" && (
                              <button
                                onClick={() =>
                                  updateStatus(order.id, "processing")
                                }
                                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-md text-sm"
                              >
                                Process Order
                              </button>
                            )}
                            {order.status === "processing" && (
                              <button
                                onClick={() =>
                                  updateStatus(order.id, "delivered")
                                }
                                className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-md text-sm"
                              >
                                Mark Delivered
                              </button>
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DisplayOrders;
