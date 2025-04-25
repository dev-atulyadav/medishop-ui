import axios from "axios";

export const register = async (userData) => {
  const response = await axios.post(
    "http://localhost:8181/customer/insert",
    userData
  );
  console.log("====================================");
  console.log(response.data);
  console.log("====================================");
  return response.data;
};

export const login = async (userData) => {
  const response = await axios.get(
    `http://localhost:8181/customer/login/${userData.email}/${userData.password}`
  );
  console.log("====================================");
  console.log(response.data);
  console.log("====================================");
  return response.data;
};

export const deleteUser = async (email) => {
  const response = await axios.delete(
    `http://localhost:8181/customer/deleteByEmail/${email}`
  );
  if (response.status === 200) {
    localStorage.removeItem("user");
    toast.success(response.data.message);
    window.location.href = "/";
  }
  return response.data;
};
