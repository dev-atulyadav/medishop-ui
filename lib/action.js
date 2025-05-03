import axios from "axios";

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
      "http://localhost:8181/vendor/insert",
      vendorData
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// add medicine
export const addMedicine = async (medicineData) => {
  try {
    const response = await axios.post(
      "http://localhost:8181/medicine/insert",
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
  console.log(vendorId, medicineId, medicineStatus, adminEmail);
  try {
    const response = await axios.put(
      `http://localhost:8181/admin/updateMedicineStatus/${vendorId}/${medicineId}/${medicineStatus}/${adminEmail}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
