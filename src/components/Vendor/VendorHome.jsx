import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const VendorHome = () => {
  const [vendor, setVendor] = useState(
    JSON.parse(localStorage.getItem("vendor"))
  );
  const [products, setProducts] = useState(
    vendor.medicine
      ? vendor.medicine
      : [
          {
            id: 1,
            name: "Sample Product 1",
            price: 299,
            stock: 50,
            sales: 12,
          },
          {
            id: 2,
            name: "Sample Product 2",
            price: 499,
            stock: 30,
            sales: 8,
          },
        ]
  );
  if (!vendor || vendor.vendorStatus === "inactive") {
    return <Navigate to="/vendor/login" />;
  }
  console.log(vendor);
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
                <p className="text-2xl font-bold">
                  {products.reduce((acc, curr) => acc + curr.sales, 0)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Product Management</h2>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
              Add New Product
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
            <p className="text-gray-500">No recent orders to display</p>
          </div>
        </main>

        <section className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Your Products</h2>
          <div className="overflow-x-auto">
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
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4">{product.name}</td>
                    <td className="px-6 py-4">₹{product.price}</td>
                    <td className="px-6 py-4">{product.stock}</td>
                    <td className="px-6 py-4">{product.sales}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </article>
    </section>
  );
};

export default VendorHome;
