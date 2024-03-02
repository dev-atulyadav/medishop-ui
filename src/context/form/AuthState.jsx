import React, { createContext, useContext, useState } from "react";
import { MenuContext } from "../menu/MenuState";

export const AuthContext = createContext();

const AuthState = (props) => {
  const handleMenu = useContext(MenuContext).handleMenu;
  const [auth, setAuth] = useState("");
  const handleForms = (e) => {
    e.preventDefault();
    let target = e.target.textContent;
    handleMenu(auth);
    if (target == "") setAuth(target);
    if (auth == "" || target === "Login") {
      setAuth("Login");
    }
    if (target == "Register") {
      setAuth(target);
    }
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
