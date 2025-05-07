import React, { useEffect, useState } from "react";
import { FaUsers, FaShoppingCart, FaStore } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import {
  getAllMedicines,
  getAllOrders,
  getAllOrdersForAdmin,
  getAllVendors,
} from "../../../lib/action";
import { Link, Navigate } from "react-router-dom";

const AdminHome = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const [vendors, setVendors] = useState([]);
  const [medicines, setMedicines] = useState([]);
  const [orders, setOrders] = useState([]);

  if (!admin) {
    return <Navigate to="/admin/login" />;
  }
  useEffect(() => {
    const fetchVendors = async () => {
      const vendors = await getAllVendors(admin.email);
      const medicines = await getAllMedicines();
      const orders = await getAllOrdersForAdmin();
      setVendors(vendors.data);
      setMedicines(medicines.data);
      setOrders(orders.data);
    };
    fetchVendors();
  }, []);
  return (
    <section className="w-full min-h-screen p-6 mt-20">
      <div className="flex items-center gap-2 mb-8">
        <MdDashboard className="text-2xl" />
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div
            className={`bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white mb-4`}
          >
            <FaUsers className="text-3xl" />
          </div>
          <h3 className="text-gray-600 text-lg">Total Users</h3>
          <p className="text-3xl font-bold mt-2">1.2K</p>
        </div>
        <Link to="/admin/vendors" className="bg-white rounded-lg shadow-md p-6">
          <div
            className={`bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white mb-4`}
          >
            <FaUsers className="text-3xl" />
          </div>
          <h3 className="text-gray-600 text-lg">Total Vendors</h3>
          <p className="text-3xl font-bold mt-2">{vendors.length}</p>
        </Link>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div
            className={`bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white mb-4`}
          >
            <FaUsers className="text-3xl" />
          </div>
          <h3 className="text-gray-600 text-lg">Total Orders</h3>
          <p className="text-3xl font-bold mt-2">{orders.length}</p>
        </div>
        <Link
          to="/admin/review-medicine"
          className="bg-white rounded-lg shadow-md p-6"
        >
          <div
            className={`bg-blue-500 w-12 h-12 rounded-full flex items-center justify-center text-white mb-4`}
          >
            <FaUsers className="text-3xl" />
          </div>
          <h3 className="text-gray-600 text-lg">Review Medicine</h3>
          <p className="text-3xl font-bold mt-2">{medicines.length}</p>
        </Link>
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">New user registration - John Doe</p>
            <small className="text-gray-400">2 minutes ago</small>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">New order placed - #ORD123456</p>
            <small className="text-gray-400">15 minutes ago</small>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-600">New vendor joined - MediPlus Store</p>
            <small className="text-gray-400">1 hour ago</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminHome;
