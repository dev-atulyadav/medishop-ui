import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import MenuContext from "../menu/MenuContext";

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
  return (
    <AuthContext.Provider value={{ auth, handleForms }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
