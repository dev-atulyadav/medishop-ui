import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllMedicines } from "../../../lib/action";

export const UserContext = createContext();

export default function UserState(props) {
  const [medicines, setMedicines] = useState([]);
  const [data, setData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    adhar: "",
  });
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const handleUpdate = (column, value) => {
    if (column == "name") {
      setData({
        name: value,
        dob: data.dob,
        email: data.email,
        password: data.password,
        address: data.address,
        phone: data.phone,
        adhar: data.adhar,
      });
    }
    if (column == "dob") {
      setData({
        name: data.name,
        dob: value,
        email: data.email,
        password: data.password,
        address: data.address,
        phone: data.phone,
        adhar: data.adhar,
      });
    }
    if (column == "email") {
      setData({
        name: data.name,
        dob: data.dob,
        email: value,
        password: data.password,
        address: data.address,
        phone: data.phone,
        adhar: data.adhar,
      });
    }
    if (column == "password") {
      setData({
        name: data.name,
        dob: data.dob,
        email: data.email,
        password: value,
        address: data.address,
        phone: data.phone,
        adhar: data.adhar,
      });
    }
    if (column == "address") {
      setData({
        name: data.name,
        dob: data.dob,
        email: data.email,
        password: data.password,
        address: value,
        phone: data.phone,
        adhar: data.adhar,
      });
    }
    if (column == "phone") {
      setData({
        name: data.name,
        dob: data.dob,
        email: data.email,
        password: data.password,
        address: data.address,
        phone: value,
        adhar: data.adhar,
      });
    }
    if (column == "adhar") {
      setData({
        name: data.name,
        dob: data.dob,
        email: data.email,
        password: data.password,
        address: data.address,
        phone: data.phone,
        adhar: value,
      });
    }
  };
  const handleRegister = (column, value) => {
    if (column === "email") {
      setData({
        email: value,
        dob: data.dob,
        password: data.password,
      });
    }
    if (column === "dob") {
      setData({
        email: data.email,
        dob: value,
        password: data.password,
      });
    }
    if (column === "password") {
      setData({
        email: data.email,
        dob: data.dob,
        password: value,
      });
    }
  };
  const handleLogin = (column, value) => {
    if (column === "email") {
      setData({
        email: value,
        password: data.password,
      });
    }
    if (column === "password") {
      setData({
        email: data.email,
        password: value,
      });
    }
  };
  const handleAddToCart = (medicine, quantity) => {
    console.log(cart);
    if (cart.some((item) => item.id === medicine.id)) {
      setCart(
        cart.map((item) =>
          item.id === medicine.id ? { ...item, quantity: quantity } : item
        )
      );
      localStorage.setItem("cart", JSON.stringify(cart));
      console.log(cart);
    } else {
      medicine.quantity = quantity;
      setCart([...cart, medicine]);
      toast.success("Product added to cart!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  localStorage.setItem("cart", JSON.stringify(cart));

  const handleRemoveFromCart = (medicine, quantity, isOrderPalced) => {
    if (isOrderPalced) {
      toast.success("Order Confirmed!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      setCart(cart.filter((item) => item.id !== medicine.id));
      localStorage.setItem("cart", JSON.stringify(cart));
      return;
    }
    if (quantity > 1) {
      setCart(
        cart.map((item) =>
          item.id === medicine.id ? { ...item, quantity: quantity - 1 } : item
        )
      );
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      setCart(cart.filter((item) => item.id !== medicine.id));
      toast.error("Product removed from cart!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
      });
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  };
  useEffect(() => {
    const fetchMedicines = async () => {
      const response = await getAllMedicines();
      if (response.status === 302) {
        setMedicines(response.data);
        // setMedicines(response.data.map((item=>)));
      }
    };
    fetchMedicines();
  }, []);
  return (
    <UserContext.Provider
      value={{
        data,
        handleUpdate,
        handleRegister,
        handleLogin,
        cart,
        handleAddToCart,
        handleRemoveFromCart,
        medicines,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
