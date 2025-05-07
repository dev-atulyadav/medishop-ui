import axios from "axios";
import { toast } from "react-toastify";

export const register = async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:8181/customer/insert",
      userData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.get(
      `http://localhost:8181/customer/login/${userData.email}/${userData.password}`
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (email) => {
  try {
    const response = await axios.delete(
      `http://localhost:8181/customer/deleteByEmail/${email}`
    );
    if (response.status === 200) {
      localStorage.removeItem("user");
      toast.success(response.data.message);
      window.location.href = "/";
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const vendorLogin = async (vendorData) => {
  try {
    const response = await axios.get(
      `http://localhost:8181/vendor/login/${vendorData.email}/${vendorData.password}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const vendorRegister = async (vendorData) => {
    try {
      const response = await axios.post(
        `http://localhost:8181/vendor/insert/`,
        vendorData
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
};

// add medicine
export const addMedicine = async (medicineData) => {
  const vendor = JSON.parse(localStorage.getItem("vendor"));
  if (vendor)
  try {
    const response = await axios.post(
      `http://localhost:8181/medicine/insert/${vendor.id}`,
      medicineData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// login admin
export const adminLogin = async (adminData) => {
  try {
    const response = await axios.get(
      `http://localhost:8181/admin/login/${adminData.email}/${adminData.password}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
//get all vendors
export const getAllVendors = async (adminEmail) => {
  try {
    const response = await axios.get(
      `http://localhost:8181/admin/getAllVendor/${adminEmail}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// update vendor status
export const updateVendorStatus = async (vendor, adminEmail) => {
  try {
    const response = await axios.put(
      `http://localhost:8181/admin/upateVendorDetails/${adminEmail}`,
      vendor
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//delete vendor
export const deleteVendor = async (vendorEmail) => {
  try {
    const response = await axios.delete(
      `http://localhost:8181/vendor/deleteByEmail/${vendorEmail}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//get all medicines
export const getAllMedicines = async () => {
  try {
    const response = await axios.get(
      "http://localhost:8181/medicine/getAllRecords"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
//update medicine status
export const updateMedicineStatus = async (
  vendorId,
  medicineId,
  medicineStatus,
  adminEmail
) => {
  try {
    const response = await axios.put(
      `http://localhost:8181/admin/updateMedicineStatus/${vendorId}/${medicineId}/${medicineStatus}/${adminEmail}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//place order
export const placeOrder = async (medicine) => {
  const userId = JSON.parse(localStorage.getItem("user")).id;
  if (userId) {
    const orderData = {
      paymentMode: "default",
      quantity: medicine.quantity,
    };
    console.log(medicine);
    try {
      const response = await axios.post(
        `http://localhost:8181/order/placeOrder/${medicine.id}/${userId}`,
        orderData
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  } else {
    toast.error("Please login to place order", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    return {
      status: 401,
      message: "Please login to place order",
    };
  }
};
//get all order for admin
export const getAllOrdersForAdmin = async () => {
  const adminEmail = JSON.parse(localStorage.getItem("admin")).email;
  if (!adminEmail) {
    return {
      status: 401,
      message: "Please login as admin",
    };
  }
  try {
    const response = await axios.get(
      `http://localhost:8181/admin/getAllOrders/${adminEmail}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
//get all orders of a user
export const getAllOrders = async (userId) => {
  try {
    const response = await axios.get(
      `http://localhost:8181/order/getOrdersByCustomerId/${userId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
//get all orders of a vendor
export const getAllOrdersOfVendor = async (vendorId) => {
  try {
    const response = await axios.get(
      `http://localhost:8181/order/getOrdersByVendorId/${vendorId}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

//update order status
export const updateOrderStatus = async (orderId, orderStatus) => {
  try {
    const response = await axios.put(
      `http://localhost:8181/order/updateStatusById/${orderId}/${orderStatus}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
