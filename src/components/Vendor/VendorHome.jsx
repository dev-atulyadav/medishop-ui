import React, { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { getAllMedicines, getAllOrdersOfVendor } from "../../../lib/action";

const VendorHome = () => {
  const [vendor, setVendor] = useState(
    JSON.parse(localStorage.getItem("vendor"))
  );
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  if (!vendor || vendor.vendorStatus === "inactive") {
    return <Navigate to="/vendor/login" />;
  }
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getAllMedicines();
      const ordersResponse = await getAllOrdersOfVendor(vendor.id);
      setOrders(ordersResponse.data);
      setProducts(response.data);
    };
    fetchProducts();
  }, []);
  return (
    <section className="w-full min-h-screen bg-gray-50 p-6 mt-20">
      <article className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Vendor Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Manage your products and view analytics
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-md">
                <p className="text-sm text-blue-600">Total Products</p>
                <p className="text-2xl font-bold">{products.length}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-md">
                <p className="text-sm text-green-600">Total Sales</p>
                <p className="text-2xl font-bold">{orders.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Product Management</h2>
            <Link
              to="/vendor/add-medicine"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              Add Medicine
            </Link>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            {orders.length > 0 ? (
              <div className="flex justify-center items-start gap-2 flex-col">
                {orders.map(
                  (order, index) =>
                    index < 3 && (
                      <div key={order.id} className="mb-2">
                        <p className="text-gray-600">
                          <strong>Order ID:</strong> {order.orderId}
                        </p>
                      </div>
                    )
                )}
                <Link to={"/vendor/view-orders"} className="self-end">
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
                    View All Orders
                  </button>
                </Link>
              </div>
            ) : (
              <p className="text-gray-500">No recent orders to display</p>
            )}
          </div>
        </main>

        <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Your Products</h2>
          <div className="overflow-x-auto">
            {products.length > 0 ? (
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Stock
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Sales
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4">{product.name}</td>
                      <td className="px-6 py-4">₹{product.price}</td>
                      <td className="px-6 py-4">{product.quantity}</td>
                      <td className="px-6 py-4">0</td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            product.status === "Approved"
                              ? "bg-green-100 text-green-800"
                              : "bg-red-100 text-red-800"
                          }`}
                        >
                          {product.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="text-gray-500">No Records Found!</p>
            )}
          </div>
        </section>
      </article>
    </section>
  );
};

export default VendorHome;
