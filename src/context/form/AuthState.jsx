import React, { createContext, useContext, useState } from "react";
import { MenuContext } from "../menu/MenuState";
import { login, register } from "../../../lib/action";
import { toast } from "react-toastify";
export const AuthContext = createContext();

const AuthState = (props) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleMenu = useContext(MenuContext).handleMenu;
  const [auth, setAuth] = useState("");

  const handleForms = async (userData, type) => {
    console.log(userData);
    if (type === "register") {
      const response = await register(userData);
      if (response.status === 201) {
        toast.success("User registered successfully");
        localStorage.setItem("user", JSON.stringify(response.data));
      } else {
        toast.error("User already exists");
      }
    }
    if (type === "login") {
      const response = await login(userData);
      if (response.status === 200) {
        toast.success("User logged in successfully");
        localStorage.setItem("user", JSON.stringify(response.data));
        window.location.reload();
      } else {
        toast.error("Invalid email or password");
      }
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    toast.success("User logged out successfully");
    window.location.reload();
  };
  const validateInputs = (type, data) => {
    if (type === "email") {
      let alpha = /^[a-z]/.test(data);
      let num = /[a-z0-9]+/;
      let specChar = /[^!@#$%^&*()_+=`-~{}|:"?><\]\[.,]+[@]{1,1}/;
      let provider = /(gmail|yahoo|outlook){1,1}[.](org|com|in|co)/;
      if (alpha && specChar && provider && num) {
        return true;
      } else if (alpha && specChar && provider && !num) {
        return true;
      } else {
        return false;
      }
    }
  };
  return (
    <AuthContext.Provider value={{ auth, handleForms }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
