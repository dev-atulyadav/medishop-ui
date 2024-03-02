import React, { createContext, useState } from "react";

export const UserContext = createContext();

export default function UserState(props) {
  const [data, setData] = useState({
    name: "",
    dob: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    adhar: "",
  });
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
  return (
    <UserContext.Provider
      value={{ data, handleUpdate, handleRegister, handleLogin }}
    >
      {props.children}
    </UserContext.Provider>
  );
}
