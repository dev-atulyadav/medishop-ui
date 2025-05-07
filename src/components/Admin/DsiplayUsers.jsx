import React, { useEffect, useState } from "react";
import { getAllCustomers } from "../../../lib/action";
import { FaEdit, FaTrash, FaUsers } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from "react-router-dom";

const DisplayUsers = () => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  if (!admin) {
    return <Navigate to="/admin/login" />;
  }

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await getAllCustomers(admin.email);
      setUsers(response.data);
    };
    fetchUsers();
  }, [editingUser]);

  const handleEdit = (user) => {
    setEditingUser(user);
  };

  return (
    <>
      <ToastContainer />
      <section className="w-full min-h-screen p-6 mt-20 bg-gray-50">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <FaUsers className="text-2xl text-blue-500" />
            <h1 className="text-2xl font-bold text-gray-800">Manage Users</h1>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
          <div className="min-w-full">
            {users.length > 0 ? (
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden sm:table-cell">
                      Phone
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Adhar
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider hidden lg:table-cell">
                      Date of Birth
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Address
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">
                          {user.name}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          {user.email}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap hidden sm:table-cell">
                        <div className="text-sm text-gray-500">
                          {user.phone}
                        </div>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap">
                        <span
                          className={`px-3 py-1 inline-flex text-xs leading-5 `}
                        >
                          {user.adhar}
                        </span>
                      </td>
                      <td className="px-4 py-4 whitespace-nowrap hidden lg:table-cell">
                        <div className="text-sm text-gray-500">{user.dob}</div>
                      </td>
                      <td>
                        <div className="text-sm text-gray-500">
                          {user.address}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500 text-lg">No users found</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default DisplayUsers;
