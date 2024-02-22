import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthState from "./context/form/AuthState";
import MenuState from "./context/menu/MenuState";
import FilterState from "./context/filter/FilterState";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MenuState>
    <AuthState>
      <FilterState>
        <App />
      </FilterState>
    </AuthState>
  </MenuState>
);
