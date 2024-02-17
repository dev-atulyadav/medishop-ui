import { useState } from "react";
import MenuContext from "./MenuContext";

const MenuState = (props) => {
  const [b, setB] = useState(false);
  const handleMenu = (e) => {
    if (!e) {
      setB(e);
    } else if (e) {
      setB(!e);
    }
    if (e.target != undefined && e.target.parentNode.type === "submit") {
      setB(!b);
    }
  };
  return (
    <MenuContext.Provider value={{ b, handleMenu }}>
      {props.children}
    </MenuContext.Provider>
  );
};

export default MenuState;
