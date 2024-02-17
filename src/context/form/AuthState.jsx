import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext";
import MenuContext from "../menu/MenuContext";

const AuthState = (props) => {
  const handleMenu = useContext(MenuContext).handleMenu;
  const [auth, setAuth] = useState(false);
  const handleForms = (e) => {
    e.preventDefault();
    handleMenu(auth);
    setAuth(!auth);
  };
  return (
    <AuthContext.Provider value={{ auth, handleForms }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
